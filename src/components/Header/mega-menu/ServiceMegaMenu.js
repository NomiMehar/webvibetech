"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import style from "./megaMenu.module.scss";

export default function ServiceMegaMenu({ megaMenuContent, onClick, isActive }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const tabs = megaMenuContent?.tabs ?? megaMenuContent?.services ?? [];
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  if (!tabs.length) return null;

  // Normalize: legacy "services" have items; "tabs" have sections
  const getSections = (tab) => {
    if (tab.sections?.length) return tab.sections;
    return [{ title: tab.title, items: tab.items ?? [] }];
  };

  const activeTab = tabs[activeTabIndex];
  const sections = activeTab ? getSections(activeTab) : [];
  const allItems = sections.flatMap((s) => s.items ?? []);

  const dropdown = (
    <ul className={`${style.mega_menu_wrapper} ${isActive ? style.mega_menu_visible : ""}`}>
      <li>
        <div className={style.mega_menu_container}>
          <div className={style.mega_menu_wrp}>
          {/* LEFT: Tab list */}
          <div className={style.tabs_panel}>
            {tabs.map((tab, index) => (
              <button
                key={tab.id ?? index}
                type="button"
                className={`${style.tab_item} ${index === activeTabIndex ? style.tab_active : ""}`}
                onClick={() => setActiveTabIndex(index)}
                onMouseEnter={() => setActiveTabIndex(index)}
              >
                <i className={`bi ${tab.icon} ${style.tab_icon}`} aria-hidden />
                <span className={style.tab_label}>{tab.title}</span>
              </button>
            ))}
          </div>

          {/* RIGHT: Tab name + list of links + service image */}
          <div className={style.content_panel}>
            <div className={style.content_left}>
              {activeTab?.link && (
                <Link
                  href={activeTab.link}
                  className={style.tab_title_link}
                  onClick={onClick}
                >
                  <span>{activeTab.title}</span>
                  <i className="bi bi-arrow-right" aria-hidden />
                </Link>
              )}
              <ul className={style.link_list}>
                {allItems.map((item, j) => (
                  <li key={j}>
                    <Link
                      href={item.link}
                      className={style.link_item}
                      onClick={onClick}
                    >
                      <i className="bi bi-chevron-right" aria-hidden />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {activeTab?.image && (
              <div className={style.content_image_wrap}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={activeTab.image}
                  alt={activeTab.imageAlt || activeTab.title}
                  className={style.content_image}
                />
              </div>
            )}
          </div>
          </div>
        </div>
      </li>
    </ul>
  );

  if (mounted && typeof document !== "undefined") {
    return createPortal(dropdown, document.body);
  }
  return dropdown;
}
