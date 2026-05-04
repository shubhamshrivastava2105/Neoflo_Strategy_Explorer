// Drop into: lib/types.ts
// Shared TypeScript types for the Neoflo FinOps Explorer prototype

export type ProcessStage = {
  number: number;
  title: string;
  whatItIs: string;
  whatHappens: string;
  example: string;
  analogy: string;
  whereItBreaks: string;
};

export type ProcessExplainerData = {
  slug: 'p2p' | 'o2c' | 'r2r';
  title: string;            // e.g. "Procure-to-Pay (P2P)"
  shortName: string;        // e.g. "P2P"
  emoji: string;            // 📦 / 💰 / 📊
  oneLiner: string;         // The short version sentence
  stageOrder: string[];     // Short stage names for the flow diagram
  runningExample: string;   // The Brew & Co setup paragraph (markdown allowed)
  stages: ProcessStage[];
  loopsAndConnections: string;  // Full markdown, can include bullet list
  whyItMattersForNeoflo: string; // Full markdown
};

export type Competitor = {
  name: string;
  positioning: string;
  pricing?: string;
  implementation?: string;
  g2?: string;
  notes?: string;
  whereTheyWin?: string;
  whereTheyAreWeak?: string;
  whyItMatters?: string;
};

export type Cohort = {
  id: string;
  letter: 'A' | 'B' | 'C' | 'D';
  title: string;
  intro?: string;
  competitors: Competitor[];
  read: string;          // The "Read:" takeaway paragraph
  // Defines which columns to show for this cohort's table
  columns: Array<keyof Competitor>;
};

export type ProcessLandscape = {
  slug: 'p2p' | 'o2c' | 'r2r';
  title: string;
  intro: string;
  cohorts: Cohort[];
};

export type GapGridCell = {
  geography: 'USA mid-market' | 'Southeast Asia mid-market';
  category: 'P2P only' | 'O2C only' | 'R2R only' | 'Multi-process platform';
  contents: string; // Players or "Empty." or "Sparse."
  highlight?: boolean; // Highlight cells that show the gap (e.g., R2R SEA)
};

export type Risk = {
  number: number;
  title: string;
  description: string;
  counter: string;
};

export type StrategyData = {
  tldr: string;
  marketSizing: {
    intro: string;
    rows: Array<{
      process: string;
      tam2026: string;
      forecast2031: string;
      cagr: string;
      notes: string;
    }>;
    headline: string;
    segmentNote: string;
  };
  landscapes: {
    p2p: ProcessLandscape;
    o2c: ProcessLandscape;
    r2r: ProcessLandscape;
  };
  gap: {
    intro: string;
    grid: GapGridCell[];
    takeaways: string[];
  };
  recommendation: {
    headline: string;
    sequencing: Array<{
      phase: string;
      timeline: string;
      description: string;
    }>;
    nonNegotiable: string;
    geography: string;
    futureVision: string;
  };
  risks: Risk[];
  changeMyMind: string[];
  appendix: string;
};
