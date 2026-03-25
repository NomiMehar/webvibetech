"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { technologyStackList } from "@/data/technologyStackList";
import styles from "./TechStackSection.module.scss";

const IMAGE_BASE = "/assets/images/technology_stack/";

export function TechStackSection() {
  const categories = useMemo(() => Object.keys(technologyStackList), []);
  const [active, setActive] = useState(categories[0] ?? "");
  const tabsRef = useRef<Array<HTMLButtonElement | null>>([]);

  const activeImages = technologyStackList[active] ?? [];

  function onKeyDown(e: React.KeyboardEvent<HTMLDivElement>, idx: number) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();

    const dir = e.key === "ArrowRight" ? 1 : -1;
    const next = (idx + dir + categories.length) % categories.length;
    setActive(categories[next]);
    tabsRef.current[next]?.focus();
  }

  return (
    <section className={styles.root} id="tech-stack" aria-label="Technology stack">
      <div className={styles.mesh} aria-hidden />
      <div className={`container ${styles.inner}`}>
        <div className={styles.head}>
          <div>
            <p className={styles.kicker}>Technology Stack</p>
            <h2 className={styles.title}>Tools we’re fluent in—chosen for longevity.</h2>
          </div>
          <p className={styles.subtitle}>
            We match the stack to your risk profile: boring where it counts, expressive where
            it differentiates—so engineering stays fast and maintainable.
          </p>
        </div>

        <div
          className={styles.tabs}
          role="tablist"
          aria-label="Technology categories"
          onKeyDown={(e) => {
            const target = e.target as HTMLElement;
            const idx = tabsRef.current.findIndex((el) => el === target);
            if (idx === -1) return;
            onKeyDown(e, idx);
          }}
        >
          {categories.map((cat, idx) => (
            <button
              key={cat}
              type="button"
              ref={(el) => {
                tabsRef.current[idx] = el;
              }}
              role="tab"
              aria-selected={active === cat}
              className={`${styles.tab} ${active === cat ? styles.tabActive : ""}`}
              tabIndex={active === cat ? 0 : -1}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.panel} role="tabpanel" aria-label={`Category: ${active}`}>
          <div className={styles.logoGrid}>
            {activeImages.map((file) => {
              const name = file.replace(/\.[^/.]+$/, "");
              return (
                <div key={file} className={styles.logoBox}>
                  <Image
                    src={`${IMAGE_BASE}${file}`}
                    alt={name}
                    width={180}
                    height={180}
                    loading="lazy"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

