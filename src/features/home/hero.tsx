"use client";
import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { EditorialLink } from "@/components/ui/editorial-link";
import styles from "./hero.module.scss";
export interface Scene {
  name: string;
  line1: string;
  line2: string;
  image: string;
  href: string;
  action: string;
}
interface Props {
  scenes: Scene[];
  culture: string;
  caption: string;
  play: string;
  pause: string;
  controls: string;
  children: ReactNode;
}
export function Hero({
  scenes,
  culture,
  caption,
  play,
  pause,
  controls,
  children,
}: Props) {
  const [index, select] = useState(0),
    [playing, setPlaying] = useState(false);
  const [failed, markFailed] = useState<string[]>([]);
  const playback = useRef<HTMLButtonElement>(null);
  const root = useRef<HTMLElement>(null);
  const scene = scenes[index];
  useEffect(() => {
    if (!playing || !root.current) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const bounds = root.current.getBoundingClientRect();
    let visible = bounds.bottom > 0 && bounds.top < window.innerHeight,
      timer: ReturnType<typeof setInterval> | undefined;
    function sync() {
      clearInterval(timer);
      if (visible && !document.hidden)
        timer = setInterval(() => select((i) => (i + 1) % scenes.length), 9000);
    }
    function preference() {
      if (media.matches) setPlaying(false);
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (visible === entry.isIntersecting) return;
      visible = entry.isIntersecting;
      sync();
    });
    sync();
    observer.observe(root.current);
    media.addEventListener("change", preference);
    document.addEventListener("visibilitychange", sync);
    return () => {
      clearInterval(timer);
      observer.disconnect();
      media.removeEventListener("change", preference);
      document.removeEventListener("visibilitychange", sync);
    };
  }, [playing, scenes.length]);
  return (
    <section
      onFocusCapture={(event) => {
        if (event.target !== playback.current) setPlaying(false);
      }}
      ref={root}
      className={styles.cover}
      aria-label={culture}
    >
      {!failed.includes(scene.image) && (
        <Image
          key={scene.image}
          fill
          sizes="100vw"
          priority={index === 0}
          src={scene.image}
          alt=""
          className={styles.photo}
          onError={() => markFailed((prior) => [...prior, scene.image])}
        />
      )}
      <div className={styles.shade} />
      {children}
      <div className={styles.copy}>
        <p className={styles.kicker}>
          <i aria-hidden="true" />
          {culture}
        </p>
        <div key={index} className={styles.sceneText}>
          <h1>
            {scene.line1} <em>{scene.line2}</em>
          </h1>
          <EditorialLink href={scene.href}>{scene.action}</EditorialLink>
        </div>
      </div>
      <div className={styles.dock}>
        <div className={styles.progress}>
          <button
            type="button"
            ref={playback}
            onClick={() => setPlaying((v) => !v)}
            aria-label={playing ? pause : play}
            className={styles.play}
          >
            {playing ? "Ⅱ" : "▷"}
          </button>
          <span>
            0{index + 1} / 0{scenes.length}
          </span>
        </div>
        <div role="group" aria-label={controls} className={styles.cards}>
          {scenes.map((item, i) => (
            <button
              type="button"
              key={item.name}
              aria-pressed={i === index}
              onClick={() => {
                select(i);
                setPlaying(false);
              }}
            >
              <Image
                src={item.image}
                alt=""
                width={76}
                height={50}
                sizes="76px"
              />
              <span>{item.name}</span>
            </button>
          ))}
        </div>
        <small>{caption}</small>
      </div>
    </section>
  );
}
