"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { Logo } from "@/components/Logo/Logo";
import { Button } from "@/components/Button/Button";
import { MegaMenu } from "@/components/MegaMenu/MegaMenu";
import { primaryNav, serviceCategories } from "@/data/navigation";
import styles from "./Header.module.scss";

const defaultCategory = serviceCategories[0]?.slug ?? "ai-automation";

export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [activeSlug, setActiveSlug] = useState(defaultCategory);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
  }, []);

  const scheduleClose = useCallback(() => {
    clearClose();
    closeTimer.current = setTimeout(() => setMegaOpen(false), 140);
  }, [clearClose]);

  const closeMegaNow = useCallback(() => {
    clearClose();
    setMegaOpen(false);
  }, [clearClose]);

  useEffect(() => {
    return () => clearClose();
  }, [clearClose]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const setH = () => {
      document.documentElement.style.setProperty("--header-h", `${el.offsetHeight}px`);
    };
    setH();
    const ro = new ResizeObserver(setH);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <header
      ref={headerRef}
      className={`${styles.root} ${scrolled ? styles.solid : ""} ${megaOpen ? styles.megaOpen : ""}`}
    >
      <div className={styles.inner}>
        <Logo />
        <nav className={styles.nav} aria-label="Primary">
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
          <div
            className={styles.servicesWrap}
            onMouseEnter={() => {
              clearClose();
              setMegaOpen(true);
            }}
            onMouseLeave={scheduleClose}
            onFocusCapture={() => {
              clearClose();
              setMegaOpen(true);
            }}
            onBlurCapture={(e) => {
              const next = e.relatedTarget as Node | null;
              if (next && e.currentTarget.contains(next)) return;
              scheduleClose();
            }}
          >
            <button
              type="button"
              className={`${styles.servicesBtn} ${megaOpen ? styles.active : ""}`}
              aria-expanded={megaOpen}
              aria-haspopup="true"
            >
              <Link href="/services">Services</Link>
              <span className={`${styles.chevron} ${megaOpen ? styles.up : ""}`} aria-hidden />
            </button>
            <MegaMenu
              open={megaOpen}
              activeSlug={activeSlug}
              onHoverCategory={(slug) => {
                clearClose();
                setActiveSlug(slug);
                setMegaOpen(true);
              }}
              onScrimClick={closeMegaNow}
              onPanelMouseLeave={scheduleClose}
              onNavigate={closeMegaNow}
            />
          </div>
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className={styles.actions}>
          <Button href="/contact" variant="secondary" size="sm">
            Let&apos;s talk
          </Button>
          <Button href="/contact" variant="primary" size="sm">
            Start a project
          </Button>
        </div>
        <button
          type="button"
          className={styles.burger}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className={`${styles.mobilePanel} ${mobileOpen ? styles.open : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        onMouseDown={(e) => {
          if (e.target === e.currentTarget) setMobileOpen(false);
        }}
      >
        <div className={styles.mobileSheet}>
          <button type="button" className={styles.mobileClose} onClick={() => setMobileOpen(false)}>
            ×
          </button>
          <div className={styles.mobileSectionTitle}>Navigate</div>
          <Link href="/" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>
            Home
          </Link>
          <Link href="/services" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>
            Services
          </Link>
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.mobileLink}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className={styles.mobileSectionTitle}>Service categories</div>
          {serviceCategories.map((cat) => (
            <div key={cat.slug} className={styles.mobileCat}>
              <div className={styles.mobileCatRow}>
                <Link
                  href={cat.href}
                  className={styles.mobileCatLink}
                  onClick={() => setMobileOpen(false)}
                >
                  {cat.title}
                </Link>
                <button
                  type="button"
                  className={`${styles.mobileArrow} ${mobileExpanded === cat.slug ? styles.mobileArrowOpen : ""}`}
                  aria-expanded={mobileExpanded === cat.slug}
                  aria-label={`${mobileExpanded === cat.slug ? "Collapse" : "Expand"} ${cat.title}`}
                  onClick={() =>
                    setMobileExpanded((v) => (v === cat.slug ? null : cat.slug))
                  }
                />
              </div>
              {mobileExpanded === cat.slug && (
                <div className={styles.mobileSub}>
                  {cat.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={styles.mobileSubLink}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className={styles.mobileCta}>
            <Button href="/contact" variant="primary" onClick={() => setMobileOpen(false)}>
              Start a project
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
