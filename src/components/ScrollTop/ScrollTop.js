"use client";

import { useState, useEffect } from "react";
import styles from "./ScrollTop.module.scss";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <a
      href="#"
      className={`${styles.scrollTop} ${visible ? styles.active : ""}`}
      onClick={(e) => { e.preventDefault(); scrollToTop(); }}
      aria-label="Scroll to top"
    >
      <i className="bi bi-arrow-up-short" />
    </a>
  );
}
