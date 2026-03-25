import type { Metadata } from "next";
import { ContactStrip } from "@/components/ContactStrip/ContactStrip";
import styles from "./contact.module.scss";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Reach Webvibe Tech at info@webvibetech.com — strategy calls, RFPs, and product inquiries.",
};

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.mesh} aria-hidden />
        <div className={`container ${styles.heroInner}`}>
          <p className={styles.kicker}>Contact</p>
          <h1 className={styles.title}>Let&apos;s make the next release undeniable.</h1>
          <p className={styles.lede}>
            Email us directly at{" "}
            <a href="mailto:info@webvibetech.com" className={styles.mail}>
              info@webvibetech.com
            </a>{" "}
            or use the form below—we respond within two business days.
          </p>
        </div>
      </section>
      <ContactStrip />
    </div>
  );
}
