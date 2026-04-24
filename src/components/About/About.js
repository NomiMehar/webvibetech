import Link from "next/link";
import SectionTitle from "../SectionTitle/SectionTitle";
import styles from "./About.module.scss";
import content from "./about.content.json";

export default function About() {
  return (
    <section id={content.id} className={styles.about}>
      <div className="container">
        <SectionTitle title={content.title} />
        <div className={styles.row}>
          <div className={styles.content}>
            <p>{content.intro}</p>
            <ul>
              {content.bullets.map((text, i) => (
                <li key={i}><i className="bi bi-check2-circle" /> <span>{text}</span></li>
              ))}
            </ul>
          </div>
          <div className={styles.right}>
            <p>{content.closing}</p>
            <Link href={content.readMoreHref} className={styles.readMore}><span>{content.readMoreLabel}</span><i className="bi bi-arrow-right" /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
