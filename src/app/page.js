import { generateMetadata } from "@/lib/metadata";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";

export const metadata = generateMetadata({
  title: "WebVibe - Custom Web Development for Fast, Scalable & High-Performance Websites",
  description: "WebVibe is a web development agency that builds fast, SEO-optimized websites and web applications with React, Next.js, Laravel, and WordPress. Custom website development, frontend development, and website speed optimization for startups and businesses worldwide.",
  slug: "",
  ogImage: "/og/og-home.jpg",
  keywords: ["web development agency", "custom website development", "Next.js development", "React development", "WordPress development", "website speed optimization", "frontend development", "high-performance websites"],
});
import Clients from "@/components/Clients/Clients";
import About from "@/components/About/About";
import WhyUs from "@/components/WhyUs/WhyUs";
import Skills from "@/components/Skills/Skills";
import Services from "@/components/Services/Services";
import CallToAction from "@/components/CallToAction/CallToAction";
import Portfolio from "@/components/Portfolio/portfolio";
import Pricing from "@/components/Pricing/Pricing";
import Testimonials from "@/components/Testimonials/Testimonials";
import FAQs from "@/components/FAQs/FAQs";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Preloader from "@/components/Preloader/Preloader";
import ScrollTop from "@/components/ScrollTop/ScrollTop";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "WebVibe Technologies",
    url: "https://webvibetech.com",
    description: "WebVibe is a web development agency specializing in custom website development, frontend development, and website speed optimization. We build fast, scalable websites with React, Next.js, Laravel, and WordPress.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://webvibetech.com/?s={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "WebVibe Technologies",
    alternateName: "WebVibe",
    url: "https://webvibetech.com",
    logo: "https://webvibetech.com/assets/img/logo.svg",
    description: "WebVibe is a web development agency offering custom website development, frontend development, website speed optimization, and high-performance websites with React, Next.js, Laravel, and WordPress.",
    foundingDate: "2018",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gujranwala",
      addressRegion: "Punjab",
      postalCode: "52250",
      addressCountry: "PK",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+92-313-7821667",
      contactType: "customer service",
      email: "info@webvibetech.com",
      areaServed: "Worldwide",
    },
    sameAs: [
      "https://www.facebook.com/people/Webvibe-Technologies/61572946083175/",
      "https://www.linkedin.com/company/webvibe-technologies",
      "https://www.instagram.com/webvibe.tech",
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
      <Header />
      <main className="main">
        <Hero />
        <Clients />
        <About />
        <WhyUs />
        <Skills />
        <Services />
        <CallToAction />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <FAQs />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
      <Preloader />
    </>
  );
}
