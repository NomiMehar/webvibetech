import { generateMetadata } from "@/lib/metadata";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ScrollTop from "@/components/ScrollTop/ScrollTop";
import Link from "next/link";

export const metadata = generateMetadata({
  title: "Website Speed Optimization Services | Performance and SEO | WebVibe",
  description: "Website speed and performance optimization. Faster load times, better SEO rankings, improved user experience. Professional optimization services.",
  slug: "speed-optimization",
  ogImage: "/og/og-speed-optimization.jpg",
  keywords: ["speed optimization", "website performance", "page speed", "Core Web Vitals", "SEO"],
});

export default function SpeedOptimizationPage() {
  return (
    <>
      <Header />
      <main className="main">
        <section className="serviceDetailsHero">
          <div className="serviceDetailsContainer">
            <h1>Website Speed Optimization</h1>
            <p>We reduce load times and improve performance so your site ranks higher and delivers a better user experience.</p>
            <Link href="/#contact" className="serviceDetailsBtn">Get a Free Consultation</Link>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
