import Link from "next/link";
import styles from "./CallToAction.module.scss";
import content from "./calltoaction.content.json";

export default function CallToAction() {
  return (
    <section id={content.id} className={styles.cta}>
      <div className={styles.bgImg} />
      <div className={styles.overlay} />
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h3>{content.heading}</h3>
          <p>{content.paragraph}</p>
          <div className={styles.ctaBtns}>
            <Link href={content.primaryCta.href} className={styles.ctaBtn}>{content.primaryCta.label}</Link>
            {content.secondaryCta && (
              <Link href={content.secondaryCta.href} className={styles.ctaBtnSecondary}>{content.secondaryCta.label}</Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
