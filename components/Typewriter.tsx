"use client";

import { useEffect, useRef, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;  // ms per character
  delay?: number;  // seconds before typing starts (after becoming visible)
  className?: string;
}

export default function Typewriter({
  text,
  speed = 65,
  delay = 0,
  className,
}: TypewriterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timeoutId: ReturnType<typeof setTimeout>;
    let intervalId: ReturnType<typeof setInterval>;

    const start = () => {
      timeoutId = setTimeout(() => {
        let i = 0;
        intervalId = setInterval(() => {
          i++;
          setDisplayed(text.slice(0, i));
          if (i >= text.length) {
            clearInterval(intervalId);
            setDone(true);
          }
        }, speed);
      }, delay * 1000);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          start();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, speed, delay]);

  return (
    <span ref={ref} className={className}>
      {displayed}
      {!done && (
        <span
          aria-hidden="true"
          className="inline-block w-px bg-current align-middle ml-[2px] opacity-100"
          style={{ height: "0.85em" }}
        />
      )}
    </span>
  );
}
