import "./globals.scss";

export const metadata = {
  metadataBase: new URL("https://webvibetech.com"),
  title: {
    default: "WebVibe — Professional Web Development & Design Services",
    template: "%s | WebVibe Technologies",
  },
  description:
    "WebVibe Technologies offers professional web development, custom website design, MVP development, UI/UX design, and website speed optimization. Expert developers in React, Next.js, Laravel, WordPress. Based in Pakistan, serving clients worldwide.",
  keywords: [
    "web development",
    "website design",
    "custom website development",
    "MVP development",
    "UI/UX design",
    "website speed optimization",
    "React development",
    "Next.js development",
    "Laravel development",
    "WordPress development",
    "web development company Pakistan",
  ],
  authors: [{ name: "WebVibe Technologies" }],
  creator: "WebVibe Technologies",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800&family=Poppins:ital,wght@0,400;0,500;0,600;0,700&family=Jost:ital,wght@0,400;0,500;0,600;0,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="index-page">{children}</body>
    </html>
  );
}
