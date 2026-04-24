"use client";

import { useEffect, useState } from "react";
import styles from "./Preloader.module.scss";

export default function Preloader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 600);
    return () => clearTimeout(t);
  }, []);
  if (!show) return null;
  return <div id="preloader" className={styles.preloader} aria-hidden="true" />;
}
