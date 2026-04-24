"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SectionTitle from "../SectionTitle/SectionTitle";
import styles from "./Portfolio.module.scss";
import content from "./portfolio.content.json";

export default function Portfolio() {
  const { id, title, subtitle, filters, items } = content;

  const [filter, setFilter] = useState(filters?.[0]?.key ?? "*");

  const filteredItems =
    filter === "*" ? items : items.filter((item) => item.filter === filter);

  return (
    <section id={id} className={styles.portfolio}>
      <div className="container">
        <SectionTitle title={title} subtitle={subtitle} />
        <ul className={styles.filters}>
          {filters.map((f) => (
            <li
              key={f.key}
              className={filter === f.key ? styles.filterActive : ""}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </li>
          ))}
        </ul>
        <div className={styles.grid}>
          {filteredItems.map((item) => (
            <div key={item.title} className={styles.portfolioItem}>
              <Image
                src={item.img}
                width={400}
                height={300}
                alt={item.title}
                className={styles.img}
              />
              <div className={styles.portfolioInfo}>
                <h4>{item.title}</h4>
                <a
                  href={item.img}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.previewLink}
                  title="Preview"
                >
                  <i className="bi bi-zoom-in" />
                </a>
                <Link
                  href="/portfolio-details"
                  className={styles.detailsLink}
                  title="Details"
                >
                  <i className="bi bi-link-45deg" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}