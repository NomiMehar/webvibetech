import { SERVICE_GROUPS, findServiceDef } from "@/data/serviceCatalog";

export type ServicePageContent = {
  slug: string;
  title: string;
  heroEyebrow: string;
  heroTitle: string;
  heroHighlight: string;
  heroDescription: string;
  subServices: { name: string; detail: string }[];
  useCases: { title: string; body: string }[];
  benefits: { title: string; body: string }[];
  process: { step: string; detail: string }[];
  cta: { title: string; body: string };
};

type Editorial = {
  useCases: { title: string; body: string }[];
  benefits: { title: string; body: string }[];
};

const PROCESS: ServicePageContent["process"] = [
  { step: "Discover", detail: "Outcomes, constraints, integrations, and the risks worth naming early." },
  { step: "Design", detail: "Architecture, UX, and delivery plan—aligned to one definition of done." },
  { step: "Develop", detail: "Vertical slices, QA, observability, and staging paths you can trust." },
  { step: "Launch", detail: "Rollout, training, tuning, and a crisp handoff your team can operate." },
];

const EDITORIAL: Record<string, Editorial> = {
  "website-development": {
    useCases: [
      { title: "Rebrand + relaunch", body: "Tight timelines with CMS guardrails, redirects, and speed budgets." },
      { title: "Commerce growth", body: "CRO-minded templates, PDP clarity, and checkout confidence." },
      { title: "Always-on marketing", body: "Editor-friendly components so teams ship without breaking layout." },
    ],
    benefits: [
      { title: "Core Web Vitals aware", body: "Images, caching, and markup chosen for measurable performance." },
      { title: "Editor-ready", body: "Structured content models that scale with your campaigns." },
      { title: "Own your stack", body: "No lock-in fairy tales—patterns your engineers can extend." },
    ],
  },
  "mobile-app-development": {
    useCases: [
      { title: "Consumer subscription", body: "Onboarding, paywalls, and retention instrumentation done right." },
      { title: "Field & ops", body: "Offline-capable flows with permissions that match real job roles." },
      { title: "Companion experiences", body: "Pair mobile moments with your web or platform backbone." },
    ],
    benefits: [
      { title: "Release discipline", body: "Staged rollouts, crash analytics, and feature flags from week one." },
      { title: "Platform fidelity", body: "iOS/Android patterns that feel native—not translated web." },
      { title: "Maintainable codebase", body: "Modules, tests, and docs that survive team changes." },
    ],
  },
  "software-development": {
    useCases: [
      { title: "B2B SaaS cores", body: "Tenancy, billing hooks, and admin workflows that mirror your pricing." },
      { title: "Internal platforms", body: "Replace brittle spreadsheets with auditable, role-aware tools." },
      { title: "API products", body: "Versioning, docs, and resilient adapters your partners can rely on." },
    ],
    benefits: [
      { title: "Operational clarity", body: "Logs, metrics, and alerts that explain failures in minutes." },
      { title: "Security-minded delivery", body: "AuthZ models and reviews appropriate to your data class." },
      { title: "Velocity without theatre", body: "Roadmaps tied to slices you can demo—not buried scaffolding." },
    ],
  },
  "ai-automation": {
    useCases: [
      { title: "Support & success", body: "Grounded answers, smart routing, and human handoff when stakes rise." },
      { title: "Ops copilots", body: "Structured outputs, approvals, and traces for regulated workflows." },
      { title: "Automation at scale", body: "Queues, retries, and observability—not brittle scripts." },
    ],
    benefits: [
      { title: "Guardrails first", body: "Policies, evals, and fallbacks designed alongside the UX." },
      { title: "Cost & latency aware", body: "Budgets tracked in CI so surprises land in dashboards—not invoices." },
      { title: "Measurable quality", body: "Instrumentation that ties model behavior to business outcomes." },
    ],
  },
  "ui-ux-design": {
    useCases: [
      { title: "0→1 product story", body: "JTBD-led journeys, sharp onboarding, and conviction in the narrative." },
      { title: "Design systems at scale", body: "Tokens, components, and governance that survive hiring sprees." },
      { title: "Complex dashboards", body: "Density with hierarchy—progressive disclosure, not decoration." },
    ],
    benefits: [
      { title: "Buildable fidelity", body: "Specs and motion that engineers can estimate and ship." },
      { title: "Accessibility by default", body: "Contrast, focus, semantics—creative constraints we welcome." },
      { title: "Brand-grade rhythm", body: "Typography, spacing, and interaction craft that feels expensive." },
    ],
  },
  "crm-development": {
    useCases: [
      { title: "Pipeline truth", body: "Stages, fields, and automation that mirror how deals really move." },
      { title: "RevOps unification", body: "Marketing, sales, and CS signals feeding one reliable graph." },
      { title: "Enterprise rollouts", body: "Governance, permissions, and adoption patterns that stick." },
    ],
    benefits: [
      { title: "Adoption-first UX", body: "Fewer clicks to the next best action for reps and managers." },
      { title: "Integration depth", body: "Billing, product, and support data in sync—with audit trails." },
      { title: "Automation with guardrails", body: "Sequences that respect compliance and signal quality." },
    ],
  },
  seo: {
    useCases: [
      { title: "Qualified organic demand", body: "Intent-led clusters—not vanity keyword scorecards." },
      { title: "Technical excellence", body: "Crawl budget, indexation, migrations, and render behavior." },
      { title: "Social + search flywheel", body: "Creators, creatives, and reporting wired to revenue signals." },
    ],
    benefits: [
      { title: "Engineering-friendly SEO", body: "We speak Next, edge, and CMS—fixes ship faster." },
      { title: "Sustainable tactics", body: "Guidelines-first playbooks that age with algorithm shifts." },
      { title: "Transparent reporting", body: "Dashboards tied to pages and cohorts you actually steer." },
    ],
  },
};

function editorialFor(groupId: string): Editorial {
  return EDITORIAL[groupId] ?? EDITORIAL["website-development"];
}

function buildContent(slug: string): ServicePageContent | null {
  const found = findServiceDef(slug);
  if (!found) return null;
  const { group, page } = found;
  const { useCases, benefits } = editorialFor(group.groupId);
  const siblings = group.pages.filter((p) => p.slug !== slug);
  const subServices = siblings.slice(0, 8).map((s) => ({
    name: s.title,
    detail: `Senior-led delivery for ${s.title}—clear milestones, tight communication, and documentation your team can run.`,
  }));

  return {
    slug: page.slug,
    title: page.title,
    heroEyebrow: group.menuTitle,
    heroTitle: `${page.title} built for teams who`,
    heroHighlight: "ship with clarity",
    heroDescription: `Webvibe Tech helps ambitious organizations launch and scale ${page.title.toLowerCase()}—pairing strategy, engineering, and UX craft so outcomes stay measurable, not metaphorical.`,
    subServices,
    useCases,
    benefits,
    process: PROCESS,
    cta: {
      title: `Ready to talk ${page.title}?`,
      body: "Share your goals and timeline—we’ll return with a pragmatic plan and engagement model that fits.",
    },
  };
}

const pages: Record<string, ServicePageContent> = {};
for (const g of SERVICE_GROUPS) {
  for (const p of g.pages) {
    const c = buildContent(p.slug);
    if (c) pages[p.slug] = c;
  }
}

export const servicePages = pages;
