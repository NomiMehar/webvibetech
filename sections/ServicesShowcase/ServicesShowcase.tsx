"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { serviceCategories } from "@/data/navigation";
import { servicesShowcaseContent } from "@/data/servicesShowcaseContent";
import styles from "./ServicesShowcase.module.scss";

export function ServicesShowcase() {
  const [active, setActive] = useState(serviceCategories[0]?.slug ?? "");
  const reduce = useReducedMotion();
  const current = serviceCategories.find((c) => c.slug === active) ?? serviceCategories[0];
  const currentService =
    servicesShowcaseContent.services.find((s) => s.slug === current?.slug) ??
    servicesShowcaseContent.services[0];

  return (
    <section className={styles.root} id="services">
      <div className={styles.inner}>
        <p className={styles.kicker}>Explore Our Core Services</p>
        <h2 className={styles.title}>{servicesShowcaseContent.heading}</h2>
        <p className={styles.sub}>{servicesShowcaseContent.subtitle}</p>
        <div className={styles.layout}>
          <div className={styles.list} role="tablist" aria-label="Service categories">
            {serviceCategories.map((cat) => (
              <button
                key={cat.slug}
                type="button"
                role="tab"
                aria-selected={cat.slug === current.slug}
                className={`${styles.item} ${cat.slug === current.slug ? styles.active : ""}`}
                onMouseEnter={() => setActive(cat.slug)}
                onFocus={() => setActive(cat.slug)}
                onClick={() => setActive(cat.slug)}
              >
                <span className={styles.itemTitle}>{cat.title}</span>
                <span className={styles.itemMeta}>{`0${serviceCategories.indexOf(cat) + 1}`}</span>
              </button>
            ))}
          </div>
          <div className={styles.preview} role="tabpanel">
            <div className={styles.previewMesh} aria-hidden />
            <AnimatePresence mode="wait">
              <motion.div
                key={currentService.slug}
                className={styles.previewInner}
                initial={reduce ? false : { opacity: 0, y: 14 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.previewCopy}>
                  <h3 className={styles.previewTitle}>{currentService.title}</h3>
                  <p className={styles.previewBody}>{currentService.description}</p>
                  <div className={styles.items}>
                    {currentService.items.map((it) => (
                      <div key={it} className={styles.itemRow}>
                        <span className={styles.itemBullet} aria-hidden />
                        <span>{it}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={currentService.href} className={styles.link}>
                    Open service blueprint →
                  </Link>
                </div>
                <div className={styles.previewRight}>
                  <div
                    className={styles.art}
                    style={{ backgroundImage: `url(${currentService.image})` }}
                    aria-hidden
                  />
                  <div className={styles.subHead}>
                    <span>Sub-services</span>
                  </div>
                  <div className={styles.subGrid} aria-label="Sub-services links">
                    {currentService.subServices.map((s) => (
                      <Link key={s.href} href={s.href} className={styles.subLink}>
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
