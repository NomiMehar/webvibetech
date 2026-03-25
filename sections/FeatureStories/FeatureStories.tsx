"use client";

import { motion, useReducedMotion } from "framer-motion";
import styles from "./FeatureStories.module.scss";

const stories = [
  {
    variant: "a" as const,
    band: "bandA",
    kicker: "Systems thinking",
    title: "Architecture that survives your next pivot.",
    highlight: "survives",
    body: "We model domains before frameworks. Boundaries, contracts, and observability are day-one citizens—not a Phase 2 Jira ticket.",
    bullets: [
      "Vertical slices over horizontal layers",
      "Explicit failure modes & retries",
      "Docs your future hires will thank you for",
    ],
  },
  {
    variant: "b" as const,
    band: "bandB",
    kicker: "Experience fidelity",
    title: "Interfaces that feel inevitable, not decorated.",
    highlight: "inevitable",
    body: "Motion, typography, and spacing carry meaning. We prototype in high fidelity early so engineering never guesses intent.",
    bullets: [
      "Token-driven components",
      "Accessibility as a creative constraint",
      "Design QA inside the sprint",
    ],
  },
  {
    variant: "c" as const,
    band: "bandC",
    kicker: "Intelligent products",
    title: "AI that earns the right to be autonomous.",
    highlight: "autonomous",
    body: "Evals, tracing, and human oversight are designed alongside UX. If it can’t show its work, it doesn’t ship to customers.",
    bullets: [
      "Grounded retrieval patterns",
      "Policy & safety gates",
      "Cost/latency budgets in CI",
    ],
  },
];

function VisualA() {
  return (
    <div className={styles.nodes} aria-hidden>
      <div className={styles.node} style={{ top: "22%", left: "18%" }} />
      <div className={styles.node} style={{ top: "38%", left: "52%" }} />
      <div className={styles.node} style={{ top: "62%", left: "30%" }} />
      <div className={styles.node} style={{ top: "48%", left: "72%" }} />
      <div className={styles.line} style={{ top: "26%", left: "22%", width: "32%", rotate: "12deg" }} />
      <div className={styles.line} style={{ top: "44%", left: "36%", width: "28%", rotate: "-18deg" }} />
      <div className={styles.line} style={{ top: "54%", left: "34%", width: "36%", rotate: "6deg" }} />
      <span className={styles.tag}>Live topology</span>
    </div>
  );
}

function VisualB() {
  return (
    <div className={styles.orbitWrap} aria-hidden>
      <div className={styles.orbit}>
        <div className={styles.core}>Product core</div>
        <div className={styles.sat} style={{ top: "6%", left: "42%" }}>
          UX
        </div>
        <div className={styles.sat} style={{ bottom: "10%", right: "8%" }}>
          Data
        </div>
        <div className={styles.sat} style={{ top: "38%", left: "-4%" }}>
          AI
        </div>
      </div>
    </div>
  );
}

function VisualC() {
  return (
    <div className={styles.ribbons} aria-hidden>
      <div className={styles.ribbon}>
        <span className={styles.ribbonLabel}>Signals</span>
      </div>
      <div className={styles.ribbon}>
        <span className={styles.ribbonLabel}>Policies</span>
      </div>
      <div className={styles.ribbon}>
        <span className={styles.ribbonLabel}>Actions</span>
      </div>
    </div>
  );
}

export function FeatureStories() {
  const reduce = useReducedMotion();

  return (
    <div className={styles.root}>
      {stories.map((s, index) => {
        const rev = index % 2 === 1;
        const innerClass = rev ? styles.innerSplitRev : styles.innerSplit;
        const copyClass = rev ? styles.copyOffsetRev : styles.copyOffset;
        const titleParts = s.title.split(s.highlight);
        return (
          <section key={s.kicker} className={`${styles.band} ${styles[s.band]}`}>
            <motion.div
              className={`${styles.inner} ${innerClass}`}
              initial={reduce ? false : { opacity: 0, y: 28 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12%" }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={copyClass}>
                <p className={styles.kicker}>{s.kicker}</p>
                <h2 className={styles.title}>
                  {titleParts[0]}
                  <span className={styles.highlight}>{s.highlight}</span>
                  {titleParts[1] ?? ""}
                </h2>
                <p className={styles.body}>{s.body}</p>
                <ul className={styles.list}>
                  {s.bullets.map((b) => (
                    <li key={b} className={styles.listItem}>
                      <span className={styles.bullet} aria-hidden />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.visual}>
                {s.variant === "a" && <VisualA />}
                {s.variant === "b" && <VisualB />}
                {s.variant === "c" && <VisualC />}
              </div>
            </motion.div>
          </section>
        );
      })}
    </div>
  );
}
