"use client";

import Image from "next/image";
import styles from "./Clients.module.scss";
import content from "./clients.content.json";

export default function Clients() {
  const logos = content.logos;
  const intro = content.intro;
  const description = content.description;
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section id={content.id} className={styles.clients}>
        {intro && <h2 className={styles.intro}>{intro}</h2>}
        {description && <p className={styles.description}>{description}</p>}
        <div className={styles.sliderWrap}>
          <div className={styles.track}>
            {duplicatedLogos.map((logo, i) => (
              <div key={i} className={styles.slide}>
                <Image
                  src={logo.src}
                  width={120}
                  height={48}
                  alt={logo.alt}
                  className={styles.img}
                />
              </div>
            ))}
          </div>
        </div>
    </section>
  );
}
