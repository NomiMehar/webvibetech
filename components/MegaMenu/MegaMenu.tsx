"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { serviceCategories } from "@/data/navigation";
import { ServiceGlyph } from "./ServiceGlyph";
import styles from "./MegaMenu.module.scss";

type Props = {
  open: boolean;
  activeSlug: string;
  onHoverCategory: (slug: string) => void;
  onScrimClick: () => void;
  onPanelMouseLeave: () => void;
  onNavigate: () => void;
};

export function MegaMenu({
  open,
  activeSlug,
  onHoverCategory,
  onScrimClick,
  onPanelMouseLeave,
  onNavigate,
}: Props) {
  const active =
    serviceCategories.find((c) => c.slug === activeSlug) ?? serviceCategories[0];

  return (
    <div className={`${styles.panel} ${open ? styles.open : ""}`} aria-hidden={!open}>
      <div className={styles.scrim} aria-hidden onClick={onScrimClick} />
      <div className={styles.drop} onMouseLeave={onPanelMouseLeave}>
        <div className={`container ${styles.inner}`}>
          <div className={styles.left}>
            {serviceCategories.map((cat) => (
              <button
                key={cat.slug}
                type="button"
                className={`${styles.catBtn} ${cat.slug === active.slug ? styles.active : ""}`}
                onMouseEnter={() => onHoverCategory(cat.slug)}
                onFocus={() => onHoverCategory(cat.slug)}
              >
                <span className={styles.catIcon}>
                  <ServiceGlyph slug={cat.slug} />
                </span>
                {cat.title}
              </button>
            ))}
          </div>
          <div className={styles.right} role="navigation" aria-label="Service links">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.slug}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.rightHead}>
                  <span className={styles.kicker}>Capabilities</span>
                  <h3 className={styles.title}>{active.title}</h3>
                  <p className={styles.tagline}>{active.tagline}</p>
                </div>
                <div className={styles.grid}>
                  {active.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={styles.item}
                      onClick={onNavigate}
                    >
                      <span className={styles.itemTitle}>{item.title}</span>
                      <span className={styles.itemHint}>View service →</span>
                    </Link>
                  ))}
                </div>
                <Link href={active.href} className={styles.viewAll} onClick={onNavigate}>
                  View {active.title} overview
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
