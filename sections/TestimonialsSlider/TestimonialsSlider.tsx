"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import styles from "./TestimonialsSlider.module.scss";

export function TestimonialsSlider() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % testimonials.length), 7200);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[i] ?? testimonials[0];

  return (
    <section className={styles.root} id="testimonials">
      <div className={styles.inner}>
        <p className={styles.kicker}>Client chorus</p>
        <h2 className={styles.title}>Calm delivery. Loud results.</h2>
        <p className={styles.sub}>
          Quotes are anonymized composites inspired by real engagements—tone, constraints, and
          outcomes preserved.
        </p>
        <div className={styles.slider}>
          <AnimatePresence mode="wait">
            <motion.div
              key={t.name}
              initial={reduce ? false : { opacity: 0, x: 24 }}
              animate={reduce ? undefined : { opacity: 1, x: 0 }}
              exit={reduce ? undefined : { opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <blockquote className={styles.quote}>“{t.quote}”</blockquote>
              <div className={styles.meta}>
                <span className={styles.name}>{t.name}</span>
                <span className={styles.role}>
                  {t.role}, {t.company}
                </span>
              </div>
              <div className={styles.stars} aria-label={`${t.rating} out of 5 stars`}>
                {"★".repeat(t.rating)}
              </div>
            </motion.div>
          </AnimatePresence>
          <div className={styles.controls}>
            <button
              type="button"
              className={styles.ctrl}
              aria-label="Previous testimonial"
              onClick={() => setI((v) => (v - 1 + testimonials.length) % testimonials.length)}
            >
              ‹
            </button>
            <button
              type="button"
              className={styles.ctrl}
              aria-label="Next testimonial"
              onClick={() => setI((v) => (v + 1) % testimonials.length)}
            >
              ›
            </button>
            <div className={styles.dots}>
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`${styles.dot} ${idx === i ? styles.on : ""}`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  onClick={() => setI(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
