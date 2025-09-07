"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export default function TextGenerateEffect({
  text,
  className,
  filter = true,
  duration = 0.5,
}: {
  text: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) {
  const [scope, animate] = useAnimate();
  const wordsArray = text.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ?? 1,
        delay: stagger(0.2),
      }
    );
  }, [animate, filter, duration]);

  return (
    <div className={cn("font-bold", className)}>
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="opacity-0"
            style={{
              filter: filter ? "blur(10px)" : "none",
            }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
