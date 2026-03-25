import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "contrast";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = [
    styles.root,
    variant === "primary" ? styles.primary : "",
    variant === "secondary" ? styles.secondary : "",
    variant === "ghost" ? styles.ghost : "",
    variant === "contrast" ? styles.contrast : "",
    size === "sm" ? styles.sm : "",
    size === "lg" ? styles.lg : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
