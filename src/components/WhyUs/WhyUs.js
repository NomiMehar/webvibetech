"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./WhyUs.module.scss";
import content from "./whyus.content.json";

export default function WhyUs() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id={content.id} className={styles.whyUs}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.left}>
            <div className={styles.content}>
              <h3><span>{content.heading}</span><strong>{content.headingStrong}</strong>{content.headingSuffix}</h3>
              <p>{content.intro}</p>
            </div>
            <div className={styles.faqContainer}>
              {content.faqItems.map((item, i) => (
                <div
                  key={i}
                  className={`${styles.faqItem} ${openIndex === i ? styles.faqActive : ""}`}
                  onClick={() => setOpenIndex(i)}
                >
                  <h3><span>{item.num}</span> {item.q}</h3>
                  <div className={styles.faqContent}>
                    <p>{item.a}</p>
                  </div>
                  <i className={`bi bi-chevron-right ${styles.faqToggle}`} />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.right}>
            <Image src={content.imageSrc} width={500} height={400} alt={content.imageAlt} className={styles.img} />
          </div>
        </div>
      </div>
    </section>
  );
}
