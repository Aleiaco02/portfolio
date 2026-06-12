"use client";

import { useEffect, useState } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  speed?: number; // ms per character
  delay?: number; // ms before starting
}

export default function AnimatedText({
  text,
  className = "",
  speed = 50,
  delay = 0,
}: AnimatedTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let index = 0;
    let timeout: ReturnType<typeof setTimeout>;
    let interval: ReturnType<typeof setInterval>;

    timeout = setTimeout(() => {
      interval = setInterval(() => {
        index++;
        setDisplayed(text.slice(0, index));
        if (index >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, delay]);

  return (
    <span className={className}>
      {displayed}
      {!done && (
        <span className="animate-pulse ml-0.5 inline-block w-0.5 h-[1em] bg-current align-middle" />
      )}
    </span>
  );
}
