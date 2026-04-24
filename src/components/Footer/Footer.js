import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.scss";
import content from "./footer.content.json";

export default function Footer() {
  return (
    <footer id={content.id} className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.grid}>
          <div className={styles.footerAbout}>
            <Link href="/" className={styles.logo}>
              <Image src="/assets/img/logo.svg" width={150} height={60} alt="WebVibe Logo" />
            </Link>
            <div className={styles.footerContact}>
              <p><strong>Phone:</strong> <a href={content.phoneHref}>{content.phone}</a></p>
              <p><strong>Email:</strong> <a href={content.emailHref}>{content.email}</a></p>
            </div>
            {content.seoDescription && (
              <p className={styles.seoDescription}>{content.seoDescription}</p>
            )}
          </div>
          <div className={styles.footerLinks}>
            <h4>{content.usefulLinksTitle}</h4>
            <ul>
              {content.usefulLinks.map((link) => (
                <li key={link.href}><i className="bi bi-chevron-right" /><Link href={link.href}>{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div className={styles.footerLinks}>
            <h4>{content.servicesTitle}</h4>
            <ul>
              {content.servicesLinks.map((link) => (
                <li key={link.href}><i className="bi bi-chevron-right" /><Link href={link.href}>{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div className={styles.socialBlock}>
            <h4>{content.followTitle}</h4>
            <p>{content.followIntro}</p>
            <div className={styles.socialLinks}>
              {content.social.map((s) => (
                <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.ariaLabel}><i className={`bi ${s.icon}`} /></a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>{content.copyright}</p>
      </div>
    </footer>
  );
}
