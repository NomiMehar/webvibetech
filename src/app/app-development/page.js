import { generateMetadata } from "@/lib/metadata";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ScrollTop from "@/components/ScrollTop/ScrollTop";
import Link from "next/link";

export const metadata = generateMetadata({
  title: "App Development Services | WebVibe",
  description: "Mobile app development. iOS, Android, cross-platform. Scalable, high-performance applications.",
  slug: "app-development",
  ogImage: "/og/og-app-development.jpg",
});

export default function AppDevelopmentPage() {
  return (
    <>
      <Header />
      <main className="main">
        <section className="serviceDetailsHero">
          <div className="serviceDetailsContainer">
            <h1>App Development Services</h1>
            <p>iOS, Android, and cross-platform mobile apps. Scalable, high-performance applications.</p>
            <Link href="/#contact" className="serviceDetailsBtn">Get a Free Consultation</Link>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
