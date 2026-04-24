"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import styles from "./Skills.module.scss";
import content from "./skills.content.json";

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id={content.id} className={styles.skills}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.imgWrap}>
            <Image src={content.imageSrc} width={500} height={400} alt={content.imageAlt} className={styles.img} />
          </div>
          <div className={styles.content}>
            <h3>{content.heading}<strong>{content.headingStrong}</strong></h3>
            <p className={styles.italic}>{content.intro}</p>
            <div className={styles.skillsContent} ref={ref}>
              {content.bars.map((bar) => (
                <div key={bar.name} className={styles.progress}>
                  <span className={styles.skill}><span>{bar.name}</span> <i className={styles.val}>{bar.value}%</i></span>
                  <div className={styles.progressBarWrap}>
                    <div className={styles.progressBar} style={{ width: visible ? `${bar.value}%` : "0%" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
