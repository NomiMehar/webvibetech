export default function sitemap() {
  const base = "https://webvibetech.com";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "yearly", priority: 1 },
    { url: `${base}/service-details`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/web-development`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/app-development`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/ui-ux-design`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/speed-optimization`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/portfolio-details`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ];
}
