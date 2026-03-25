export type ServicesShowcaseSubService = {
  label: string;
  href: string;
};

export type ServicesShowcaseMainService = {
  slug: string; // matches SERVICE_GROUPS[groupId]
  title: string;
  href: string;
  description: string;
  image: string;
  items: string[];
  subServices: ServicesShowcaseSubService[];
};

export type ServicesShowcaseContent = {
  heading: string;
  subtitle: string;
  services: ServicesShowcaseMainService[];
};

/**
 * Content for the homepage "ServicesShowcase" section.
 * Hrefs are aligned to canonical `/services/[slug]/` routes.
 */
export const servicesShowcaseContent: ServicesShowcaseContent = {
  heading: "Explore Our Core Services",
  subtitle:
    "From software and mobile to AI, automation, SEO, and CRM systems, Webvibe Tech delivers the foundations your business needs to scale.",
  services: [
    {
      slug: "ai-automation",
      title: "AI & Automation",
      href: "/services/ai-automation/",
      description:
        "AI and automation systems that reduce manual work, improve decision-making, and embed intelligence into everyday operations.",
      image: "/assets/images/services/services-showcase.png",
      items: [
        "Strategy and use-case definition",
        "Secure, production-ready AI systems",
        "Workflow and process automation",
      ],
      subServices: [
        { label: "AI Chatbots", href: "/services/ai-chatbot-development/" },
        { label: "AI Agents", href: "/services/ai-agent-development/" },
        { label: "Agentic AI", href: "/services/agentic-ai-development/" },
        { label: "LLM Development", href: "/services/llm-development/" },
        { label: "Automation & Workflow Engineering", href: "/services/workflow-automation/" },
        { label: "Generative AI", href: "/services/generative-ai-development/" },
      ],
    },
    {
      slug: "mobile-app-development",
      title: "Mobile App Development",
      href: "/services/mobile-app-development/",
      description:
        "High-performance mobile apps built for real-world use, across iOS, Android, and cross-platform frameworks.",
      image: "/assets/images/services/services-showcase.png",
      items: ["Native and cross-platform builds", "User-centric design and flows", "Scalable, secure backends"],
      subServices: [
        { label: "iOS App Development", href: "/services/ios-app-development/" },
        { label: "Android App Development", href: "/services/android-app-development/" },
        { label: "Flutter App Development", href: "/services/flutter-app-development/" },
        { label: "App UI/UX", href: "/services/app-ui-ux-design/" },
        { label: "App Maintenance", href: "/services/app-maintenance/" },
      ],
    },
    {
      slug: "software-development",
      title: "Software Development",
      href: "/services/software-development/",
      description:
        "Custom software solutions engineered to match your workflows, users, and growth plans.",
      image: "/assets/images/services/services-showcase.png",
      items: ["End-to-end product development", "APIs, integrations, and platforms", "Scalable architecture and DevOps"],
      subServices: [
        { label: "Custom Software Development", href: "/services/custom-software-development/" },
        { label: "Web App Development", href: "/services/web-app-development/" },
        { label: "SaaS Development", href: "/services/saas-development/" },
        { label: "MVP Development", href: "/services/mvp-development/" },
        { label: "API Development", href: "/services/api-development/" },
      ],
    },
    {
      slug: "website-development",
      title: "Website Development",
      href: "/services/website-development/",
      description:
        "Fast, SEO-ready websites designed for performance, scalability, and conversion—not just launch-day aesthetics.",
      image: "/assets/images/services/services-showcase.png",
      items: ["High-performance marketing sites", "CMS and e-commerce builds", "SEO-first, conversion-led UX"],
      subServices: [
        { label: "WordPress Development", href: "/services/wordpress-development/" },
        { label: "Shopify Development", href: "/services/shopify-development/" },
        { label: "E-Commerce Website Development", href: "/services/ecommerce-development/" },
        { label: "Landing Page Development", href: "/services/landing-page-development/" },
        { label: "Website Maintenance", href: "/services/website-maintenance/" },
        { label: "Custom Website Development", href: "/services/custom-web-development/" },
        { label: "Webflow Development", href: "/services/webflow-development/" },
      ],
    },
    {
      slug: "ui-ux-design",
      title: "UI & UX Design",
      href: "/services/ui-ux-design/",
      description:
        "Product-focused UI and UX design that balances usability, brand, and business outcomes.",
      image: "/assets/images/services/services-showcase.png",
      items: ["Research-led UX strategy", "Interface and interaction design", "Design systems and prototyping"],
      subServices: [
        { label: "UX Research", href: "/services/ux-research/" },
        { label: "UI Design", href: "/services/ui-design/" },
        { label: "UX Audit", href: "/services/ux-audit/" },
        { label: "Wireframing & Prototyping", href: "/services/wireframing-prototyping/" },
        { label: "Design Systems", href: "/services/design-systems/" },
        { label: "Product Design", href: "/services/product-design/" },
      ],
    },
    {
      slug: "seo",
      title: "SEO",
      href: "/services/seo/",
      description:
        "Search strategies built to drive qualified demand, protect technical health, and compound results over time.",
      image: "/assets/images/services/services-showcase.png",
      items: ["Technical and on-page optimisation", "Demand-led content strategy", "Link acquisition and authority building"],
      subServices: [
        { label: "Technical SEO", href: "/services/technical-seo/" },
        { label: "Local SEO", href: "/services/local-seo/" },
        { label: "SEO Audit", href: "/services/seo-audit/" },
        { label: "On-Page SEO", href: "/services/on-page-seo/" },
        { label: "Off-page SEO", href: "/services/off-page-seo/" },
        { label: "E-Commerce SEO", href: "/services/ecommerce-seo/" },
        { label: "Link Building", href: "/services/link-building/" },
        { label: "SEO Migration Services", href: "/services/seo-migration/" },
      ],
    },
    {
      slug: "crm-development",
      title: "CRM Development",
      href: "/services/crm-development/",
      description:
        "CRM systems designed around real workflows, built for adoption, automation, and reliable reporting.",
      image: "/assets/images/services/services-showcase.png",
      items: ["Custom CRM design and builds", "Implementation, integration, and automation", "Reporting, dashboards, and data integrity"],
      subServices: [
        { label: "CRM Implementation", href: "/services/crm-implementation/" },
        { label: "ERP Development Services", href: "/services/erp-development/" },
        { label: "CRM Customisation", href: "/services/crm-customization/" },
        { label: "CRM Integration", href: "/services/crm-integration/" },
        { label: "CRM Automation & AI", href: "/services/crm-automation-ai/" },
      ],
    },
  ],
};

