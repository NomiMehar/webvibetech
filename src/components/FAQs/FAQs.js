"use client";

import { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import styles from "./FAQs.module.scss";
import content from "./faqs.content.json";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section id={content.id} className={styles.faq2}>
      <div className="container">
        <SectionTitle title={content.title} subtitle={content.subtitle} />
        <div className={styles.faqContainer}>
          {content.items.map((item, i) => (
            <div key={i} className={`${styles.faqItem} ${openIndex === i ? styles.faqActive : ""}`} onClick={() => setOpenIndex(i)}>
              <i className="bi bi-question-circle faqIcon" />
              <h3>{item.q}</h3>
              <div className={styles.faqContent}><p>{item.a}</p></div>
              <i className="bi bi-chevron-right faqToggle" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
