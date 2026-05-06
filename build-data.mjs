import fs from 'node:fs';
import path from 'node:path';

const files = [
  { src: 'content/strategy.ts',  exp: 'strategyData',         global: 'STRATEGY_DATA' },
  { src: 'content/p2p.ts',       exp: 'p2pData',              global: 'P2P_DATA' },
  { src: 'content/o2c.ts',       exp: 'o2cData',              global: 'O2C_DATA' },
  { src: 'content/r2r.ts',       exp: 'r2rData',              global: 'R2R_DATA' },
  { src: 'content/customers.ts', exp: 'customerEvidenceData', global: 'CUSTOMER_DATA' },
  { src: 'content/insights.ts',  exp: 'insightsData',          global: 'INSIGHTS_DATA' },
  { src: 'content/comparisons.ts', exp: 'comparisonsData',     global: 'COMPARISONS_DATA' },
  { src: 'content/workflow-deep.ts', exp: 'workflowExplanations', global: 'WORKFLOW_DEEP' },
  { src: 'content/workflow-personas.ts', exp: 'workflowPersonas', global: 'WORKFLOW_PERSONAS' },
  { src: 'content/process-stages-deep.ts', exp: 'stageDeepDives', global: 'STAGE_DEEP' },
  { src: 'content/personas.ts', exp: 'personasData', global: 'PERSONAS_DATA' },
  { src: 'content/voice-of-customer.ts', exp: 'voiceOfCustomerData', global: 'VOC_DATA' },
  { src: 'content/prospect-briefs.ts', exp: 'prospectBriefsData', global: 'PROSPECT_BRIEFS' },
];

let out = '// Auto-generated from content/*.ts — do not edit\n';

for (const f of files) {
  let src = fs.readFileSync(f.src, 'utf8');

  // Strip TypeScript-only constructs:
  // 1) imports
  src = src.replace(/^\s*import[\s\S]*?;\s*$/gm, '');
  // 2) `export type ... = { ... };` blocks (for customers.ts inline types) — match balanced braces
  src = stripExportTypes(src);
  // 3) Type annotation on the export const: `export const x: Type = ` -> `const x = `
  src = src.replace(
    new RegExp(`export\\s+const\\s+${f.exp}\\s*(?::[^=]+)?=`, ''),
    `const ${f.exp} =`,
  );

  // The remainder should be a valid JS expression ending in `;`.
  // Evaluate it in a sandbox to ensure correctness, then JSON.stringify.
  const evalSrc = `${src}\n;return ${f.exp};`;
  let value;
  try {
    value = new Function(evalSrc)();
  } catch (e) {
    console.error(`Failed to evaluate ${f.src}:`, e.message);
    console.error('--- transformed source (first 800 chars) ---');
    console.error(src.slice(0, 800));
    process.exit(1);
  }

  out += `\nwindow.${f.global} = ${JSON.stringify(value, null, 2)};\n`;
}

fs.writeFileSync('data.js', out);
console.log('Wrote data.js (' + out.length + ' bytes)');

function stripExportTypes(src) {
  let result = '';
  let i = 0;
  while (i < src.length) {
    if (src.slice(i).match(/^export\s+type\s+\w+\s*=/)) {
      // skip until balanced `;` at depth 0 considering braces
      const start = i;
      // advance past `=`
      const eq = src.indexOf('=', i);
      i = eq + 1;
      let depth = 0;
      while (i < src.length) {
        const ch = src[i];
        if (ch === '{') depth++;
        else if (ch === '}') depth--;
        else if (ch === ';' && depth === 0) { i++; break; }
        i++;
      }
      // skip any trailing newline
      while (i < src.length && (src[i] === '\n' || src[i] === '\r')) i++;
    } else {
      result += src[i];
      i++;
    }
  }
  return result;
}
