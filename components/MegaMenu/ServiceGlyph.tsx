type Props = { slug: string; className?: string };

export function ServiceGlyph({ slug, className }: Props) {
  const cn = className ?? "";
  switch (slug) {
    case "ai-automation":
      return (
        <svg className={cn} viewBox="0 0 24 24" width={22} height={22} aria-hidden>
          <path
            d="M12 3v4M12 17v4M4.5 8.5l3.5 2M16 13.5l3.5 2M4.5 15.5l3.5-2M16 10.5l3.5-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <circle cx="12" cy="12" r="3.2" fill="currentColor" opacity="0.2" />
          <circle cx="12" cy="12" r="1.6" fill="currentColor" />
        </svg>
      );
    case "mobile-app-development":
      return (
        <svg className={cn} viewBox="0 0 24 24" width={22} height={22} aria-hidden>
          <rect
            x="7"
            y="3"
            width="10"
            height="18"
            rx="2.2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path d="M10 19h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "software-development":
      return (
        <svg className={cn} viewBox="0 0 24 24" width={22} height={22} aria-hidden>
          <path
            d="M8 7l-4 5 4 5M16 7l4 5-4 5M13 5l-2 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "website-development":
      return (
        <svg className={cn} viewBox="0 0 24 24" width={22} height={22} aria-hidden>
          <rect
            x="3"
            y="5"
            width="18"
            height="14"
            rx="2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path d="M3 9h18" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="6" cy="7" r="0.7" fill="currentColor" />
          <circle cx="8.2" cy="7" r="0.7" fill="currentColor" />
        </svg>
      );
    case "ui-ux-design":
      return (
        <svg className={cn} viewBox="0 0 24 24" width={22} height={22} aria-hidden>
          <path
            d="M4 17c2.5-6 4.5-6 7-1s4.5 5 9-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <circle cx="7" cy="8" r="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    case "seo":
      return (
        <svg className={cn} viewBox="0 0 24 24" width={22} height={22} aria-hidden>
          <circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M16 16l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "crm-development":
      return (
        <svg className={cn} viewBox="0 0 24 24" width={22} height={22} aria-hidden>
          <path
            d="M5 6h14v12H5zM5 10h14M9 6v12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return (
        <svg className={cn} viewBox="0 0 24 24" width={22} height={22} aria-hidden>
          <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
  }
}
