import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicePages } from "@/lib/serviceContent";
import { ServicePageSections } from "@/sections/ServicePage/ServicePageSections";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(servicePages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = servicePages[slug];
  if (!data) return { title: "Service" };
  return {
    title: `${data.title} | Webvibe Tech`,
    description: data.heroDescription,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const data = servicePages[slug];
  if (!data) notFound();
  return <ServicePageSections data={data} />;
}
