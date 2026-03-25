import Link from "next/link";
import { Logo } from "@/components/Logo/Logo";
import { SERVICE_GROUPS } from "@/data/serviceCatalog";
import styles from "./Footer.module.scss";

const social = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/webvibe-technologies",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/webvibe.tech",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/Webvibe-Technologies/61572946083175/",
  },
];

export function Footer() {
  return (
    <footer className={styles.root}>
      <div className={styles.mesh} aria-hidden />
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Logo />
          <p className={styles.tagline}>
            Webvibe Tech partners with ambitious teams to ship scalable software, AI systems, and
            refined digital experiences—measured in outcomes, not slide decks.
          </p>
        </div>
        <div>
          <div className={styles.colTitle}>Services</div>
          <Link href="/services" className={styles.link}>
            All services
          </Link>
          {SERVICE_GROUPS.map((g) => (
            <Link key={g.groupId} href={g.href} className={styles.link}>
              {g.menuTitle}
            </Link>
          ))}
        </div>
        <div>
          <div className={styles.colTitle}>Follow us</div>
          <p className={styles.followText}>
            Stay connected with us by following these social platforms.
          </p>
          {social.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className={styles.social}
              target="_blank"
              rel="noopener noreferrer"
            >
              {s.label}
            </a>
          ))}
        </div>
        <div>
          <div className={styles.colTitle}>Company</div>
          <Link href="/about" className={styles.link}>
            About us
          </Link>
          <Link href="/blog" className={styles.link}>
            Blog
          </Link>
          <Link href="/contact" className={styles.link}>
            Contact
          </Link>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} Webvibe Tech. All rights reserved.</span>
        <a className={styles.email} href="mailto:info@webvibetech.com">
          info@webvibetech.com
        </a>
      </div>
    </footer>
  );
}
