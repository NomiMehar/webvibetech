const BASE_URL = "https://webvibetech.com";
const SITE_NAME = "WebVibe Technologies";
const TWITTER_HANDLE = "@webvibetech";

export function generateMetadata(options) {
  const { title, description, slug, ogImage, keywords = [] } = options;
  const url = slug ? `${BASE_URL}/${slug}` : BASE_URL;
  const imageUrl = ogImage ? `${BASE_URL}${ogImage}` : `${BASE_URL}/og/og-default.jpg`;

  return {
    title,
    description,
    keywords: keywords.length ? keywords : undefined,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} — ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${SITE_NAME}`,
      description,
      images: [imageUrl],
      creator: TWITTER_HANDLE,
    },
  };
}

export { BASE_URL, SITE_NAME };
