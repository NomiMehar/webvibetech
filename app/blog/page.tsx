import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";
import styles from "./blog.module.scss";

export const metadata: Metadata = {
  title: "Blog",
  description: "Perspectives on product, engineering, AI, and UX from the Webvibe Tech team.",
};

export default function BlogPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <p className={styles.kicker}>Blog</p>
          <h1 className={styles.title}>Notes from the build floor.</h1>
          <p className={styles.lede}>
            Long-form pieces arrive here first. For project inquiries,{" "}
            <Link href="/contact" className={styles.inline}>
              contact us
            </Link>
            .
          </p>
        </div>
      </section>
      <section className={styles.list}>
        <div className={`container ${styles.listInner}`}>
          {blogPosts.map((post) => (
            <article key={post.slug} className={styles.card}>
              <p className={styles.date}>{post.date}</p>
              <h2 className={styles.postTitle}>
                <Link href={`/blog/${post.slug}`} className={styles.postLink}>
                  {post.title}
                </Link>
              </h2>
              <p className={styles.excerpt}>{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
