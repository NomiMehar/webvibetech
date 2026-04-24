"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import SectionTitle from "../SectionTitle/SectionTitle";
import styles from "./Testimonials.module.scss";
import content from "./testimonials.content.json";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % content.items.length), 5000);
    return () => clearInterval(t);
  }, []);
  const item = content.items[index];
  return (
    <section id={content.id} className={styles.testimonials}>
      <div className="container">
        <SectionTitle title={content.title} subtitle={content.subtitle} />
        <div className={styles.slider}>
          <div className={styles.slide}>
            <Image src={item.img} width={120} height={120} alt={item.name} className={styles.testimonialImg} />
            <h3>{item.name}</h3>
            <h4>{item.role}</h4>
            <div className={styles.stars}><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /></div>
            <p>{item.text}</p>
          </div>
        </div>
        <div className={styles.pagination}>
          {content.items.map((_, i) => (
            <button key={i} type="button" className={i === index ? styles.bulletActive : styles.bullet} onClick={() => setIndex(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
