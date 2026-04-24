import Link from "next/link";
import SectionTitle from "../SectionTitle/SectionTitle";
import styles from "./Pricing.module.scss";
import content from "./pricing.content.json";

export default function Pricing() {
  return (
    <section id={content.id} className={styles.pricing}>
      <div className="container">
        <SectionTitle title={content.title} subtitle={content.subtitle} />
        <div className={styles.grid}>
          {content.plans.map((plan) => (
            <div key={plan.title} className={`${styles.pricingItem} ${plan.featured ? styles.featured : ""}`}>
              <div className={styles.pricingHeader}>
                <div className={styles.pricingOverlay} />
                <div className={styles.pricingPattern} />
                <h3>{plan.title}</h3>
                <p className={styles.pricingDescription}>{plan.desc}</p>
                <h4>{plan.sup && <sup>{plan.sup}</sup>}{plan.price}</h4>
              </div>
              <div className={styles.pricingContent}>
                <ul>
                  {plan.features.map((f) => (
                    <li key={f}><i className="bi bi-check-circle" /> {f}</li>
                  ))}
                </ul>
                <Link href={content.ctaHref} className={styles.buyBtn}>GET STARTED</Link>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.wideCard}>
          <div className={styles.wideHeader}>
            <div className={styles.pricingOverlay} />
            <div className={styles.pricingPattern} />
            <h3>{content.wideCard.title}</h3>
            <p className={styles.pricingDescription}>{content.wideCard.desc}</p>
            <h4>{content.wideCard.sup && <sup>{content.wideCard.sup}</sup>}{content.wideCard.price}<span className={styles.startingFrom}>{content.wideCard.startingFrom}</span></h4>
          </div>
          <div className={styles.wideContent}>
            <ul>
              {content.wideCard.features.map((f) => (
                <li key={f}><i className="bi bi-check-circle" /> {f}</li>
              ))}
            </ul>
            <Link href={content.ctaHref} className={styles.buyBtn}>GET STARTED</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
