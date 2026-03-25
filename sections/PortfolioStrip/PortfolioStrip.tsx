"use client";

import { motion, useReducedMotion } from "framer-motion";
import { portfolioItems } from "@/data/portfolio";
import styles from "./PortfolioStrip.module.scss";

export function PortfolioStrip() {
  const reduce = useReducedMotion();

  return (
    <section className={styles.root} id="portfolio">
      <div className={styles.inner}>
        <p className={styles.kicker}>Selected outcomes</p>
        <div className={styles.headRow}>
          <h2 className={styles.title}>Work that bends the curve.</h2>
          <p className={styles.hint}>
            Horizontal drift—scroll sideways. Each engagement is NDA-safe abstracted; numbers are
            representative composites.
          </p>
        </div>
      </div>
      <div className={styles.trackWrap}>
        <div className={styles.track} tabIndex={0} role="region" aria-label="Portfolio carousel">
          {portfolioItems.map((item, i) => (
            <motion.article
              key={item.id}
              className={styles.card}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ delay: i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className={styles.cat}>{item.category}</p>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.metric}>{item.metric}</p>
              <p className={styles.accent}>{item.accent}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
