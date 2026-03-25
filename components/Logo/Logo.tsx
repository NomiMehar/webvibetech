import Link from "next/link";
import styles from "./Logo.module.scss";

function CircuitV() {
  return (
    <svg
      className={styles.vIcon}
      viewBox="0 0 32 36"
      width={22}
      height={26}
      aria-hidden
    >
      <circle cx="16" cy="32" r="3.2" fill="currentColor" />
      <circle cx="4" cy="8" r="3.2" fill="currentColor" />
      <circle cx="28" cy="8" r="3.2" fill="currentColor" />
      <circle cx="26" cy="18" r="2.6" fill="currentColor" />
      <path
        d="M16 32 L4 8 M16 32 L28 8 M28 8 L26 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo() {
  return (
    <Link href="/" className={styles.wrap} aria-label="Webvibe Tech home">
      <span className={styles.mark}>
        WEB
        <span className={styles.accent}>
          <CircuitV />
        </span>
        IBE
      </span>
      <span className={styles.sub}>Technologies</span>
    </Link>
  );
}
