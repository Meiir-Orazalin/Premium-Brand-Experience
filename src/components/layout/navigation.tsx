"use client";
import Link from "next/link";
import { useRef } from "react";
import styles from "./masthead.module.scss";
export function Navigation({
  label,
  items,
}: {
  label: string;
  items: { label: string; href: string }[];
}) {
  const ref = useRef<HTMLDetailsElement>(null);
  return (
    <details
      className={styles.menu}
      ref={ref}
      onKeyDown={(e) => {
        if (e.key === "Escape" && ref.current) {
          ref.current.open = false;
          ref.current.querySelector("summary")?.focus();
        }
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget))
          e.currentTarget.open = false;
      }}
    >
      <summary>
        <span className={styles.lines} aria-hidden="true" />
        {label}
      </summary>
      <div>
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => {
              if (ref.current) ref.current.open = false;
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </details>
  );
}
