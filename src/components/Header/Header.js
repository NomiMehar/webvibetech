"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";
import content from "./header.content.json";
import ServiceMegaMenu from "./mega-menu/ServiceMegaMenu";

export default function Header() {
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isServiceActive, setServiceActive] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
      if (document.body.classList.contains("index-page")) {
        if (isScrolled) document.body.classList.add("scrolled");
        else document.body.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileNavActive) document.body.classList.add("mobileNavActive");
    else document.body.classList.remove("mobileNavActive");
  }, [mobileNavActive]);

  const closeMobileNav = () => setMobileNavActive(false);

  return (
    <header
      id={content.id}
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
    >
      <div className="container">
        <Link href="/" className={styles.logo} aria-label="WebVibe Home">
          <Image src="/assets/img/logo.svg" width={150} height={60} alt="WebVibe Logo" />
        </Link>

        <nav id="navmenu" className={styles.navmenu} aria-label="Main navigation">
          <ul className={mobileNavActive ? styles.navOpen : ""} role="list">
            {content.nav.map((item) =>
              item.hasMegamenu ? (
                <li
                  key={item.label}
                  className={`${styles.megamenu} ${isServiceActive ? styles.megamenuActive : ""}`}
                  onMouseEnter={() => setServiceActive(true)}
                  onMouseLeave={() => setServiceActive(false)}
                >
                  <Link href={item.href} className={styles.megamenuTrigger}>
                    <span>{item.label}</span>
                    <i className={`bi bi-chevron-down ${isServiceActive ? styles.chevronOpen : ""}`} />
                  </Link>
                  <ServiceMegaMenu
                    megaMenuContent={content.megaMenu}
                    isActive={isServiceActive}
                    onClick={closeMobileNav}
                  />
                </li>
              ) : (
                <li key={item.label}>
                  <Link href={item.href} className={item.active ? styles.active : ""} onClick={closeMobileNav}>{item.label}</Link>
                </li>
              )
            )}
          </ul>
          <button type="button" className={styles.mobileNavToggle} aria-label="Toggle menu" onClick={() => setMobileNavActive(!mobileNavActive)}>
            <i className={mobileNavActive ? "bi bi-x" : "bi bi-list"} />
          </button>
        </nav>

        <Link href={content.getStartedHref} className={styles.btnGetstarted}>{content.getStartedLabel}</Link>
      </div>
    </header>
  );
}
