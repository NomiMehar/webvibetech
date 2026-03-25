import type { Metadata } from "next";
import Link from "next/link";
import { SERVICE_GROUPS } from "@/data/serviceCatalog";
import { Button } from "@/components/Button/Button";
import styles from "./servicesHub.module.scss";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Webvibe Tech services across web, mobile, software, AI, design, CRM, and SEO—each with dedicated delivery playbooks.",
};

export default function ServicesHubPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroMesh} aria-hidden />
        <div className={`container ${styles.heroInner}`}>
          <p className={styles.kicker}>Services</p>
          <h1 className={styles.title}>Capability streams, each with senior ownership.</h1>
          <p className={styles.lede}>
            Pick a practice to see specific offerings—or start a conversation and we&apos;ll map the
            right sequence for your roadmap.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Talk to us
          </Button>
        </div>
      </section>
      <section className={styles.listSection}>
        <div className={`container ${styles.listInner}`}>
          {SERVICE_GROUPS.map((group) => (
            <div key={group.groupId} className={styles.group}>
              <div className={styles.groupHead}>
                <h2 className={styles.groupTitle}>{group.menuTitle}</h2>
                <p className={styles.groupTagline}>{group.tagline}</p>
                <Link href={group.href} className={styles.groupOverview}>
                  Overview →
                </Link>
              </div>
              <ul className={styles.links}>
                {group.pages.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/services/${p.slug}/`}
                      className={styles.serviceLink}
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
