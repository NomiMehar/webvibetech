export type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  metric: string;
  accent: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Commerce mesh",
    category: "E‑commerce platform",
    metric: "+38% conversion",
    accent: "Warm ledger UI with edge-cached PLPs",
  },
  {
    id: "2",
    title: "Atlas Field",
    category: "Mobile + sync",
    metric: "99.2% uptime",
    accent: "Offline-first ops for distributed teams",
  },
  {
    id: "3",
    title: "Northstar CRM",
    category: "RevOps",
    metric: "4× faster handoffs",
    accent: "Custom objects mirroring real pipeline stages",
  },
  {
    id: "4",
    title: "Helix AI Desk",
    category: "AI support",
    metric: "−52% tier‑0 load",
    accent: "Grounded answers with human escalation paths",
  },
  {
    id: "5",
    title: "Lumen CMS",
    category: "Marketing site",
    metric: "LCP 0.9s",
    accent: "Headless stack with editor guardrails",
  },
];
