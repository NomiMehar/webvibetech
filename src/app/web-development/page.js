import { generateMetadata } from "@/lib/metadata";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ScrollTop from "@/components/ScrollTop/ScrollTop";
import Link from "next/link";

export const metadata = generateMetadata({
  title: "Web Development | WebVibe",
  description: "Custom websites, React, Next.js, Laravel, WordPress. Responsive and SEO-friendly.",
  slug: "web-development",
  ogImage: "/og/og-default.jpg",
});

export default function Page() {
  return (
    <>
      <Header />
      <main className="main">
        <section className="serviceDetailsHero">
          <div className="serviceDetailsContainer">
            <h1>Web Development Services</h1>
            <p>Custom websites, React, Next.js, Laravel, WordPress.</p>
            <Link href="/#contact" className="serviceDetailsBtn">Get a Free Consultation</Link>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
