import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./editorial-link.module.scss";
export function EditorialLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className={styles.link}>
      {children}
    </Link>
  );
}
