"use client";

import { motion, useReducedMotion } from "framer-motion";
import styles from "./TrustSection.module.scss";

const stats = [
  { value: "16+", label: "Years combined leadership" },
  { value: "200+", label: "Shipped initiatives" },
  { value: "30+", label: "Specialists in network" },
];

const logos = ["Series B SaaS", "Gov digital", "Luxury retail", "Healthtech", "Fintech", "AI infra"];

export function TrustSection() {
  const reduce = useReducedMotion();

  return (
    <section className={styles.root} id="trust">
      <div className={styles.inner}>
        <div>
          <p className={styles.kicker}>Trusted velocity</p>
          <h2 className={styles.title}>Proof lives in production—not promises.</h2>
          <p className={styles.body}>
            We embed with product, design, and engineering leads to unblock decisions fast. The work
            is opinionated, documented, and built to survive your next funding chapter.
          </p>
          <div className={styles.logos} aria-label="Client sectors">
            {logos.map((name) => (
              <span key={name} className={styles.logoPill}>
                {name}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.stats}>
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className={styles.stat}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: i * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.statValue}>{s.value}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
