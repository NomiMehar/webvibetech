"use client";

import { motion, useReducedMotion } from "framer-motion";
import styles from "./WhyTrustSection.module.scss";

const reasons = [
  {
    title: "Executive-level visibility",
    body: "Weekly narrative updates, burn-up views, and decision logs—no mystery phases or silent drift.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M4 19V5M9 19V9M14 19v-7M19 19v-12"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Senior pods only",
    body: "Lead engineers and designers stay hands-on. You’re not paying for a sales deck bench.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M15 6h3l2 2v3M4 19c0-3 3-4.5 5-4.5s5 1.5 5 4.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Outcome hygiene",
    body: "Instrumentation, QA gates, and docs that survive your next funding chapter—not a handover PDF.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M5 12l4 4L19 6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
];

export function WhyTrustSection() {
  const reduce = useReducedMotion();

  return (
    <section className={styles.root} id="why-trust" aria-labelledby="why-trust-heading">
      <div className={styles.inner}>
        <div className={styles.head}>
          <p className={styles.kicker}>Why businesses trust us</p>
          <h2 id="why-trust-heading" className={styles.title}>
            A studio model built for accountable delivery.
          </h2>
          <p className={styles.sub}>
            We’ve replaced theatrics with transparency: defined interfaces between design, engineering,
            and your stakeholders—so progress is always legible.
          </p>
        </div>
        <div className={styles.grid}>
          {reasons.map((r, i) => (
            <motion.article
              key={r.title}
              className={styles.card}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ delay: i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.icon}>{r.icon}</div>
              <h3 className={styles.cardTitle}>{r.title}</h3>
              <p className={styles.cardBody}>{r.body}</p>
            </motion.article>
          ))}
        </div>
        <div className={styles.bar}>
          <div className={styles.barStat}>
            <span className={styles.barVal}>16+</span>
            <span className={styles.barLabel}>Years collective</span>
          </div>
          <div className={styles.barStat}>
            <span className={styles.barVal}>200+</span>
            <span className={styles.barLabel}>Shipped initiatives</span>
          </div>
          <div className={styles.barStat}>
            <span className={styles.barVal}>30+</span>
            <span className={styles.barLabel}>Specialists</span>
          </div>
        </div>
      </div>
    </section>
  );
}
