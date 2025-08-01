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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const b = baffle(ref.current);
    b.set({
      characters: "█▓▒░<>/\\|*#@!$%",
      speed: 25,
    });
    b.start();

    setTimeout(() => b.reveal(start ?? 1500), delay ?? 20);
    return () => {
      if (b) {
        b.stop();
      }
    };
  }, []);
  return <span ref={ref}>{text}</span>;
};
