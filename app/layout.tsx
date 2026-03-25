import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { ContactStripGate } from "@/components/ContactStrip/ContactStripGate";
import "@/styles/main.scss";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://webvibetech.com"),
  title: {
    default: "Webvibe Tech | Software, AI & Digital Products",
    template: "%s | Webvibe Tech",
  },
  description:
    "Premium software agency building scalable digital products, AI systems, and refined UX—without template fatigue.",
  openGraph: {
    title: "Webvibe Tech | Software, AI & Digital Products",
    description:
      "Scalable engineering, intelligent automation, and craft-led UX for teams who ship seriously.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <div className="grain" aria-hidden />
        <Header />
        <main>{children}</main>
        <ContactStripGate />
        <Footer />
      </body>
    </html>
  );
}
