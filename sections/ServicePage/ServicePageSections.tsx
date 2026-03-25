"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ServicePageContent } from "@/lib/serviceContent";
import { Button } from "@/components/Button/Button";
import styles from "./ServicePage.module.scss";

type Props = { data: ServicePageContent };

export function ServicePageSections({ data }: Props) {
  const reduce = useReducedMotion();

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroMesh} aria-hidden />
        <div className={styles.heroInner}>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className={styles.kicker}>{data.heroEyebrow}</p>
            <h1 className={styles.title}>
              {data.heroTitle}{" "}
              <span className={styles.highlight}>{data.heroHighlight}</span>
            </h1>
            <p className={styles.desc}>{data.heroDescription}</p>
            <div className={styles.ctas}>
              <Button href="/contact" variant="primary" size="lg">
                Start a project
              </Button>
              <Button href="/" variant="secondary" size="lg">
                Back to home
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className={styles.section} id="subs">
        <div className={styles.sectionInner}>
          <p className={styles.sectionKicker}>Sub-services</p>
          <h2 className={styles.sectionTitle}>What we deliver inside {data.title}.</h2>
          <div className={styles.subGrid}>
            {data.subServices.map((s, i) => (
              <motion.article
                key={s.name}
                className={styles.subCard}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ delay: i * 0.04, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <h3 className={styles.subName}>{s.name}</h3>
                <p className={styles.subDetail}>{s.detail}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <p className={styles.sectionKicker}>Use cases</p>
          <h2 className={styles.sectionTitle}>Where teams bring us in first.</h2>
          <div className={styles.split}>
            {data.useCases.map((u) => (
              <div key={u.title} className={styles.listBlock}>
                <h3 className={styles.listTitle}>{u.title}</h3>
                <p className={styles.listItemBody}>{u.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <p className={styles.sectionKicker}>Benefits</p>
          <h2 className={styles.sectionTitle}>Why engagements feel different with Webvibe.</h2>
          <div className={styles.list}>
            {data.benefits.map((b) => (
              <div key={b.title} className={styles.listBlock}>
                <h3 className={styles.listItemTitle}>{b.title}</h3>
                <p className={styles.listItemBody}>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <p className={styles.sectionKicker}>Process</p>
          <h2 className={styles.sectionTitle}>How we run {data.title.toLowerCase()} programs.</h2>
          <div className={styles.timeline}>
            {data.process.map((p) => (
              <div key={p.step} className={styles.tItem}>
                <span className={styles.tDot} aria-hidden />
                <p className={styles.tStep}>{p.step}</p>
                <p className={styles.tDetail}>{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaBand}>
        <div className="container">
        <div className={styles.ctaInner}>
          <div>
            <h2 className={styles.ctaTitle}>{data.cta.title}</h2>
            <p className={styles.ctaBody}>{data.cta.body}</p>
          </div>
          <Button href="/contact" variant="primary" size="lg">
            Book a call
          </Button>
        </div>
        </div>
      </section>
    </>
  );
}
