import { generateMetadata } from "@/lib/metadata";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ScrollTop from "@/components/ScrollTop/ScrollTop";
import Link from "next/link";

export const metadata = generateMetadata({
  title: "Professional Web Development Services | WebVibe Technologies",
  description: "Expert web development services. Custom website development, MVP development, UI/UX design, website speed optimization. React, Next.js, Laravel, WordPress.",
  slug: "service-details",
  ogImage: "/og/og-services.jpg",
  keywords: ["web development services", "custom website development", "MVP development", "UI/UX design", "website speed optimization"],
});

export default function ServiceDetailsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Web Development Services",
    provider: { "@type": "Organization", name: "WebVibe Technologies", url: "https://webvibetech.com" },
    areaServed: { "@type": "Country", name: "Worldwide" },
  };

  const services = [
    { href: "/web-development", label: "Web Development" },
    { href: "/app-development", label: "App Development" },
    { href: "/ui-ux-design", label: "UI/UX Design" },
    { href: "/speed-optimization", label: "Speed Optimization" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="main">
        <section className="serviceDetailsHero">
          <div className="serviceDetailsContainer">
            <h1>Our Services</h1>
            <p>Professional web development, app development, UI/UX design, and website speed optimization. Explore each service below.</p>
            <div className="serviceDetailsLinks">
              {services.map((s) => (
                <Link key={s.href} href={s.href} className="serviceDetailsBtn">{s.label}</Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
