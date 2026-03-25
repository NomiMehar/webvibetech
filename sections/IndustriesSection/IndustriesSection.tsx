"use client";

import { motion, useReducedMotion } from "framer-motion";
import styles from "./IndustriesSection.module.scss";

const industries = [
  { name: "Fintech & banking", detail: "Compliance-aware UX, payment flows, and secure APIs." },
  { name: "Healthcare & pharma", detail: "Patient journeys, data sensitivity, and audited releases." },
  { name: "E-commerce & retail", detail: "High-converting storefronts, ERP hooks, and lifecycle ops." },
  { name: "Logistics & mobility", detail: "Dispatch, fleet tools, and real-time coordination surfaces." },
  { name: "Education & media", detail: "Streaming, subscriptions, and engagement loops done tastefully." },
  { name: "SaaS & AI", detail: "Onboarding, billing, model ops, and trust UX for new categories." },
  { name: "Real estate & proptech", detail: "Portals, 3D/2D tours, and CRM-connected lead flows." },
  { name: "Startups & scaleups", detail: "MVPs that graduate—documentation that survives your Series A." },
];

export function IndustriesSection() {
  const reduce = useReducedMotion();

  return (
    <section className={styles.root} id="industries" aria-labelledby="industries-heading">
      <div className={styles.inner}>
        <p className={styles.kicker}>Industries we serve</p>
        <h2 id="industries-heading" className={styles.title}>
          Context over templates—depth across sectors.
        </h2>
        <p className={styles.sub}>
          We’ve shipped in regulated, high-traffic, and zero-to-one contexts. The pattern is the
          same: understand the domain, then design systems that flex with reality.
        </p>
        <div className={styles.list}>
          {industries.map((item, i) => (
            <motion.div
              key={item.name}
              className={styles.row}
              initial={reduce ? false : { opacity: 0, x: -12 }}
              whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ delay: i * 0.04, duration: 0.45 }}
            >
              <div className={styles.rowHead}>
                <span className={styles.mark} aria-hidden />
                <span className={styles.name}>{item.name}</span>
              </div>
              <p className={styles.detail}>{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
