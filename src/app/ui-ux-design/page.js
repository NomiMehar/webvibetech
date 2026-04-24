import { generateMetadata } from "@/lib/metadata";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ScrollTop from "@/components/ScrollTop/ScrollTop";
import Link from "next/link";

export const metadata = generateMetadata({
  title: "UI/UX Design Services | WebVibe",
  description: "UI/UX design for websites and apps. User-friendly, engaging interfaces.",
  slug: "ui-ux-design",
  ogImage: "/og/og-ui-ux.jpg",
});

export default function UiUxDesignPage() {
  return (
    <>
      <Header />
      <main className="main">
        <section className="serviceDetailsHero">
          <div className="serviceDetailsContainer">
            <h1>UI/UX Design Services</h1>
            <p>User interface and experience design. Visually stunning and user-friendly interfaces.</p>
            <Link href="/#contact" className="serviceDetailsBtn">Get a Free Consultation</Link>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
