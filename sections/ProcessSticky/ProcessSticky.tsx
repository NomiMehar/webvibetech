"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./ProcessSticky.module.scss";

const steps = [
  {
    id: "discover",
    name: "Discover",
    title: "Clarify the bet before we touch code.",
    body: "Stakeholder interviews, technical archaeology, and success metrics—compressed into a decision log everyone signs.",
    tags: ["JTBD", "Risks", "Scope envelope"],
  },
  {
    id: "design",
    name: "Design",
    title: "High-fidelity systems, not vague mockups.",
    body: "Flows, components, and motion specs that engineers can estimate. Accessibility and content design ride along—not after.",
    tags: ["IA", "Tokens", "Prototypes"],
  },
  {
    id: "develop",
    name: "Develop",
    title: "Vertical slices that stay shippable.",
    body: "Feature flags, tracing, and pragmatic tests. You’ll see working software weekly—not a big reveal.",
    tags: ["CI", "Observability", "QA"],
  },
  {
    id: "launch",
    name: "Launch",
    title: "Go-live with nerves of steel.",
    body: "Runbooks, monitoring, and a crisp handoff. We stay close through the noisy first weeks.",
    tags: ["SRE", "Training", "Tune-up"],
  },
];

export function ProcessSticky() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (reduce) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const idx = refs.current.findIndex((el) => el === e.target);
          if (idx >= 0) setActive(idx);
        }
      },
      { root: null, threshold: 0.45, rootMargin: "-20% 0px -35% 0px" },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [reduce]);

  return (
    <section className={styles.root} id="process">
      <div className={styles.inner}>
        <p className={styles.kicker}>Sticky scroll</p>
        <h2 className={styles.title}>Discover → Design → Develop → Launch</h2>
        <p className={styles.sub}>
          Scroll the narrative—steps highlight as you move. On mobile, tap to jump; the story stays
          the same.
        </p>
        <div className={styles.grid}>
          <div className={styles.sticky}>
            <div className={styles.steps} role="tablist" aria-label="Process steps">
              {steps.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  aria-selected={active === i}
                  className={`${styles.stepBtn} ${active === i ? styles.active : ""}`}
                  onClick={() => {
                    refs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
                    setActive(i);
                  }}
                >
                  <span className={styles.idx}>0{i + 1}</span>
                  <span className={styles.stepName}>{s.name}</span>
                </button>
              ))}
            </div>
          </div>
          <div className={styles.panels}>
            {steps.map((s, i) => (
              <motion.div
                key={s.id}
                id={s.id}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                className={`${styles.panel} ${active === i ? styles.active : ""}`}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className={styles.panelKicker}>Phase · {s.name}</p>
                <h3 className={styles.panelTitle}>{s.title}</h3>
                <p className={styles.panelBody}>{s.body}</p>
                <div className={styles.metrics}>
                  {s.tags.map((t) => (
                    <span key={t} className={styles.metric}>
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
