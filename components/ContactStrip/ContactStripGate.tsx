"use client";

import { usePathname } from "next/navigation";
import { ContactStrip } from "./ContactStrip";

export function ContactStripGate() {
  const pathname = usePathname();
  if (pathname === "/contact") return null;
  return <ContactStrip />;
}
