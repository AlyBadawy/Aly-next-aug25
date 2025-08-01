"use client";
import baffle from "baffle";
import { useEffect, useRef } from "react";

type ScrambleTextProps = {
  text: string;
  start?: number;
  delay?: number;
};
export const ScrambleText = ({ text, start, delay }: ScrambleTextProps) => {
  const ref = useRef(null);

  useEffect(() => {
    const b = baffle(ref.current);
    b.set({
      characters: "█▓▒░<>/\\|*#@!$%",
      speed: 25,
    });
    b.start();
    // You can control when to reveal (e.g., with Intersection Observer)
    setTimeout(() => b.reveal(start ?? 1500), delay ?? 20); // Reveal over 800ms after 20ms
    return () => {
      if (b) {
        b.stop();
      }
    };
  }, []);
  return <span ref={ref}>{text}</span>;
};
