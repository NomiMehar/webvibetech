import Link from "next/link";
import styles from "./Hero.module.scss";
import content from "./hero.content.json";

export default function Hero() {
  return (
    <section id={content.id} className={styles.hero}>
      <div className={styles.bg} aria-hidden />
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.content}>
          <h1>
            Custom Web Development for Fast, Scalable &{" "}
            <span className={styles.highlight}>High-Performance Websites</span>
          </h1>
          <p>
            WebVibe is a modern web development agency that helps businesses build fast, SEO-optimized websites and web applications. We focus on performance, user experience, and conversions—from strategy to launch.
          </p>
          <div className={styles.ctaRow}>
            <Link href="/#contact" className={styles.btnPrimary}>
              Get Started
            </Link>
            <Link href="/#contact" className={styles.btnIcon} aria-label="Contact">
              <i className="bi bi-arrow-right" />
            </Link>
            <div className={styles.socialProof}>
              <div className={styles.avatars}>
                <span className={styles.avatar} />
                <span className={styles.avatar} />
                <span className={styles.avatar} />
              </div>
              <span className={styles.stars}>
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
              </span>
              <span className={styles.trustText}>Trusted by 500+ clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
