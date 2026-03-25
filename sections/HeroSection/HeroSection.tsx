"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/Button/Button";
import styles from "./HeroSection.module.scss";

const floatTransition = { duration: 4.5, repeat: Infinity, ease: "easeInOut" as const };

export function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section className={styles.root} aria-label="Introduction">
      <div className={styles.bgMesh} aria-hidden />
      <div className={`${styles.blob} ${styles.a}`} aria-hidden />
      <div className={`${styles.blob} ${styles.b}`} aria-hidden />
      <div className="container">
      <div className={styles.inner}>
      <div className={styles.copy}>
          <p className={styles.eyebrow}>
            <span className={styles.dot} aria-hidden />
            Webvibe Tech
          </p>
          <h1 className={styles.headline}>
            We Build Scalable Digital Products &amp;{" "}
            <span className={styles.gradientWord}>AI Solutions</span>
          </h1>
          <p className={styles.lede}>
            Product strategy, engineering, and craft—woven into one studio engagement. We ship
            systems your team can evolve, with UX that earns trust on the first session.
          </p>
          <div className={styles.ctas}>
            <Button href="/contact" variant="primary" size="lg">
              Book a strategy call
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              Explore services
            </Button>
          </div>
          <p className={styles.note}>
            Typical kickoff-to-roadmap: 10 days. NDA-friendly. Senior-led pods, no bait-and-switch
            bench.
          </p>
        </div>
        <div className={styles.visual}>
          <div className={styles.spark} aria-hidden />
          <div className={styles.stack}>
            <motion.div
              className={`${styles.card} ${styles.c1}`}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                animate={reduce ? undefined : { y: [0, -10, 0] }}
                transition={reduce ? undefined : floatTransition}
              >
                <div className={styles.cardKicker}>Live program</div>
                <div className={styles.cardTitle}>Delivery cockpit</div>
                <p className={styles.cardBody}>
                  Burn-up, risk flags, and design QA notes in one pane—stakeholders stop guessing.
                </p>
                <div className={styles.pillRow}>
                  <span className={styles.pill}>Roadmap</span>
                  <span className={styles.pill}>Design QA</span>
                  <span className={styles.pill}>Release train</span>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              className={`${styles.card} ${styles.c2}`}
              initial={reduce ? false : { opacity: 0, y: 28 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                animate={reduce ? undefined : { y: [0, 12, 0] }}
                transition={reduce ? undefined : { ...floatTransition, delay: 0.4 }}
              >
                <div className={styles.cardKicker}>Inference graph</div>
                <div className={styles.cardTitle}>Guardrailed agents</div>
                <p className={styles.cardBody}>
                  Traces, eval hooks, and policy checks wired in—not bolted on after launch.
                </p>
                <div className={styles.pillRow}>
                  <span className={styles.pill}>Tracing</span>
                  <span className={styles.pill}>Evals</span>
                  <span className={styles.pill}>HITL</span>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              className={`${styles.card} ${styles.c3}`}
              initial={reduce ? false : { opacity: 0, y: 32 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                animate={reduce ? undefined : { y: [0, -8, 0] }}
                transition={reduce ? undefined : { ...floatTransition, delay: 0.8 }}
              >
                <div className={styles.cardKicker}>Experience layer</div>
                <div className={styles.cardTitle}>Product polish</div>
                <p className={styles.cardBody}>
                  Micro-interactions that clarify state—never decoration for its own sake.
                </p>
                <div className={styles.pillRow}>
                  <span className={styles.pill}>Motion</span>
                  <span className={styles.pill}>A11y</span>
                  <span className={styles.pill}>Tokens</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
