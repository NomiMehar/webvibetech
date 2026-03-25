import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button/Button";
import styles from "./about.module.scss";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Webvibe Tech is a senior-led product studio shipping software, AI, and design for teams who value clarity and craft.",
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.mesh} aria-hidden />
        <div className={`container ${styles.heroInner}`}>
          <p className={styles.kicker}>About Webvibe Tech</p>
          <h1 className={styles.title}>Built for teams who outgrow generic vendors.</h1>
          <p className={styles.lede}>
            We&apos;re a compact studio of strategists, designers, and engineers. The goal isn&apos;t
            more tickets—it&apos;s momentum you can measure: velocity, quality, and stakeholder calm.
          </p>
        </div>
      </section>
      <section className={styles.body}>
        <div className={`container ${styles.grid}`}>
          <div>
            <h2 className={styles.h2}>How we work</h2>
            <p className={styles.p}>
              Engagements start with a crisp problem frame: what must be true in 90 days, what
              constraints are immovable, and what success looks like in numbers. From there we run
              overlapping discovery and delivery—so research informs the next slice, not a dusty
              deck.
            </p>
            <p className={styles.p}>
              You&apos;ll work directly with leads who still prototype, review PRs, and facilitate
              design critiques. No bait-and-switch account layers—just adults who treat your roadmap
              as seriously as you do.
            </p>
          </div>
          <aside className={styles.aside}>
            <h3 className={styles.h3}>Principles</h3>
            <ul className={styles.list}>
              <li>Transparency beats theatre</li>
              <li>Systems beat heroics</li>
              <li>Craft is a commercial advantage</li>
            </ul>
            <Button href="/contact" variant="primary">
              Start a conversation
            </Button>
            <Link href="/services" className={styles.link}>
              Browse services →
            </Link>
          </aside>
        </div>
      </section>
    </div>
  );
}
