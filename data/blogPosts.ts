export type BlogPost = { slug: string; title: string; date: string; excerpt: string; body: string };

export const blogPosts: BlogPost[] = [
  {
    slug: "shipping-with-taste",
    title: "Shipping with taste under deadline",
    date: "March 2026",
    excerpt: "How we protect craft when calendars compress—without hiding behind scope creep.",
    body: "Deadlines are constraints, not excuses. We front-load sequencing decisions, keep design QA inside iterations, and document trade-offs so stakeholders can choose consciously—not discover surprises in UAT.",
  },
  {
    slug: "evals-before-features",
    title: "Evals before features in LLM products",
    date: "February 2026",
    excerpt: "A practical checklist for teams tired of demo-only AI.",
    body: "Before new capability ships, we pin success metrics: task completion rate, human override frequency, cost per success, and latency budgets. Eval harnesses become part of CI—so regressions are boring instead of existential.",
  },
  {
    slug: "design-qa-in-sprint",
    title: "Design QA that belongs in the sprint",
    date: "January 2026",
    excerpt: "Rituals that keep motion, spacing, and accessibility from becoming “phase two”.",
    body: "Pixel parity isn’t vanity when it carries meaning. We run snapshot reviews against tokens, keyboard flows against acceptance criteria, and motion against reduced-motion preferences—before the feature is considered done.",
  },
];
