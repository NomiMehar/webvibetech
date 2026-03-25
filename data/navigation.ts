import { SERVICE_GROUPS } from "@/data/serviceCatalog";

export type MegaSubItem = {
  title: string;
  href: string;
};

export type ServiceCategory = {
  slug: string;
  title: string;
  tagline: string;
  href: string;
  items: MegaSubItem[];
};

/** Mega menu categories — left column uses `slug` for icon mapping. */
export const serviceCategories: ServiceCategory[] = SERVICE_GROUPS.map((g) => ({
  slug: g.groupId,
  title: g.menuTitle,
  tagline: g.tagline,
  href: g.href,
  items: g.pages.map((p) => ({
    title: p.title,
    href: `/services/${p.slug}/`,
  })),
}));

export const primaryNav = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
