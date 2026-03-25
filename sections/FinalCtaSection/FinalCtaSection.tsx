"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/Button/Button";
import styles from "./FinalCtaSection.module.scss";

export function FinalCtaSection() {
  const reduce = useReducedMotion();

  return (
    <section className={styles.root} id="final-cta">
      <div className={styles.mesh} aria-hidden />
      <div className="container">
      <motion.div
        className={styles.panel}
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div>
          <p className={styles.kicker}>Next engagement</p>
          <h2 className={styles.title}>
            Let&apos;s build your <span className={styles.accent}>next flagship</span> release.
          </h2>
          <p className={styles.body}>
            Two ways to start: a focused strategy intensive or a scoped discovery sprint. Either
            route, you leave with a roadmap your team can defend internally.
          </p>
          <div className={styles.ctas}>
            <Button href="mailto:info@webvibetech.com" variant="primary" size="lg">
              info@webvibetech.com
            </Button>
            <Button href="/services" variant="contrast" size="lg">
              Browse services
            </Button>
          </div>
        </div>
        <aside className={styles.side} aria-label="Response expectations">
          <p className={styles.sideTitle}>What happens next</p>
          <div className={styles.sideRow}>
            <span>Reply window</span>
            <span className={styles.val}>48h</span>
          </div>
          <div className={styles.sideRow}>
            <span>Intro call</span>
            <span className={styles.val}>30 min</span>
          </div>
          <div className={styles.sideRow}>
            <span>Proposal draft</span>
            <span className={styles.val}>~10 days</span>
          </div>
        </aside>
      </motion.div>
      </div>
    </section>
  );
}
