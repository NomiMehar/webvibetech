import { generateMetadata } from "@/lib/metadata";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ScrollTop from "@/components/ScrollTop/ScrollTop";

export const metadata = generateMetadata({
  title: "Portfolio Details | WebVibe Technologies",
  description: "View our portfolio of web development and design projects. Custom websites, apps, and digital solutions.",
  slug: "portfolio-details",
  ogImage: "/og/og-default.jpg",
});

export default function PortfolioDetailsPage() {
  return (
    <>
      <Header />
      <main className="main">
        <section className="serviceDetailsHero">
          <div className="serviceDetailsContainer">
            <h1>Portfolio Details</h1>
            <p>Explore our completed projects and case studies.</p>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
