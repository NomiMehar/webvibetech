import Link from "next/link";
import SectionTitle from "../SectionTitle/SectionTitle";
import styles from "./Services.module.scss";
import content from "./services.content.json";

export default function Services() {
  return (
    <section id={content.id} className={styles.services}>
      <div className="container">
        <SectionTitle title={content.title} subtitle={content.subtitle} />
        <div className={styles.grid}>
          {content.items.map((item) => (
            <div key={item.title} className={styles.serviceItem}>
              <div className={styles.icon}><i className={`bi ${item.icon}`} /></div>
              <h4><Link href={item.href}>{item.title}</Link></h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
