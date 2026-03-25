/**
 * Canonical service structure — URLs match live routes (/services/[slug]).
 * `groupId` maps to mega-menu glyph + shared editorial defaults.
 */
export type ServicePageDef = { slug: string; title: string };

export type ServiceGroup = {
  groupId: string;
  menuTitle: string;
  tagline: string;
  href: string;
  pages: ServicePageDef[];
};

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    groupId: "website-development",
    menuTitle: "Website Development",
    tagline: "Performance-led sites, storefronts, and CMS programs.",
    href: "/services/website-development/",
    pages: [
      { slug: "website-development", title: "Website Development" },
      { slug: "wordpress-development", title: "WordPress Development" },
      { slug: "shopify-development", title: "Shopify Development" },
      { slug: "ecommerce-development", title: "E-commerce Development" },
      { slug: "landing-page-development", title: "Landing Page Development" },
      { slug: "website-maintenance", title: "Website Maintenance" },
      { slug: "custom-web-development", title: "Custom Web Development" },
      { slug: "webflow-development", title: "Webflow Development" },
    ],
  },
  {
    groupId: "mobile-app-development",
    menuTitle: "Mobile App Development",
    tagline: "Native-quality apps with predictable release cadence.",
    href: "/services/mobile-app-development/",
    pages: [
      { slug: "mobile-app-development", title: "Mobile App Development" },
      { slug: "ios-app-development", title: "iOS App Development" },
      { slug: "android-app-development", title: "Android App Development" },
      { slug: "flutter-app-development", title: "Flutter App Development" },
      { slug: "app-ui-ux-design", title: "App UI/UX Design" },
      { slug: "app-maintenance", title: "App Maintenance" },
    ],
  },
  {
    groupId: "software-development",
    menuTitle: "Software Development",
    tagline: "SaaS, internal tools, and APIs engineered to scale.",
    href: "/services/software-development/",
    pages: [
      { slug: "software-development", title: "Software Development" },
      { slug: "custom-software-development", title: "Custom Software Development" },
      { slug: "web-app-development", title: "Web App Development" },
      { slug: "saas-development", title: "SaaS Development" },
      { slug: "mvp-development", title: "MVP Development" },
      { slug: "api-development", title: "API Development" },
    ],
  },
  {
    groupId: "ai-automation",
    menuTitle: "AI & Automation",
    tagline: "Guardrailed AI, agents, and workflow automation.",
    href: "/services/ai-automation/",
    pages: [
      { slug: "ai-automation", title: "AI & Automation" },
      { slug: "ai-chatbot-development", title: "AI Chatbot Development" },
      { slug: "llm-development", title: "LLM Development" },
      { slug: "workflow-automation", title: "Workflow Automation" },
      { slug: "generative-ai-development", title: "Generative AI Development" },
      { slug: "agentic-ai-development", title: "Agentic AI Development" },
      { slug: "ai-agent-development", title: "AI Agent Development" },
    ],
  },
  {
    groupId: "ui-ux-design",
    menuTitle: "UI & UX Design",
    tagline: "Research-led product design, systems, and craft.",
    href: "/services/ui-ux-design/",
    pages: [
      { slug: "ui-ux-design", title: "UI/UX Design" },
      { slug: "ux-research", title: "UX Research" },
      { slug: "ui-design", title: "UI Design" },
      { slug: "ux-audit", title: "UX Audit" },
      { slug: "wireframing-prototyping", title: "Wireframing & Prototyping" },
      { slug: "design-systems", title: "Design Systems" },
      { slug: "product-design", title: "Product Design" },
    ],
  },
  {
    groupId: "crm-development",
    menuTitle: "CRM Development",
    tagline: "CRM, ERP, integrations, and revenue operations glue.",
    href: "/services/crm-development/",
    pages: [
      { slug: "crm-development", title: "CRM Development" },
      { slug: "crm-implementation", title: "CRM Implementation" },
      { slug: "erp-development", title: "ERP Development" },
      { slug: "crm-customization", title: "CRM Customization" },
      { slug: "crm-integration", title: "CRM Integration" },
      { slug: "crm-automation-ai", title: "CRM Automation & AI" },
    ],
  },
  {
    groupId: "seo",
    menuTitle: "SEO",
    tagline: "Technical SEO, content, and social programs that compound.",
    href: "/services/seo/",
    pages: [
      { slug: "seo", title: "SEO" },
      { slug: "technical-seo", title: "Technical SEO" },
      { slug: "local-seo", title: "Local SEO" },
      { slug: "seo-audit", title: "SEO Audit" },
      { slug: "on-page-seo", title: "On-page SEO" },
      { slug: "off-page-seo", title: "Off-page SEO" },
      { slug: "ecommerce-seo", title: "E-commerce SEO" },
      { slug: "link-building", title: "Link Building" },
      { slug: "seo-migration", title: "SEO Migration" },
      { slug: "social-media-marketing", title: "Social Media Marketing" },
      { slug: "social-media-management", title: "Social Media Management" },
    ],
  },
];

export const allServiceSlugs: string[] = SERVICE_GROUPS.flatMap((g) =>
  g.pages.map((p) => p.slug),
);

export function findServiceGroup(slug: string): ServiceGroup | undefined {
  return SERVICE_GROUPS.find((g) => g.pages.some((p) => p.slug === slug));
}

export function findServiceDef(slug: string): { group: ServiceGroup; page: ServicePageDef } | null {
  for (const group of SERVICE_GROUPS) {
    const page = group.pages.find((p) => p.slug === slug);
    if (page) return { group, page };
  }
  return null;
}
