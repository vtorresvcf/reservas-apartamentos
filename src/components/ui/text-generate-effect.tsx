"use client";

import { useEffect } from "react";
import { motion, useAnimate, stagger } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextGenerateEffectProps {
  text: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  onAnimationComplete?: () => void;
}

export default function TextGenerateEffect({
  text,
  className,
  filter = true,
  duration = 0.8,
  onAnimationComplete,
}: TextGenerateEffectProps) {
  const [scope, animate] = useAnimate();
  const wordsArray = text.split(" ");

  useEffect(() => {
    animate(
      "span",
      { opacity: 1, filter: filter ? "blur(0px)" : "none" },
      {
        duration: duration,
        delay: stagger(0.2),
      }
    ).then(() => {
      if (onAnimationComplete) onAnimationComplete();
    });
  }, [animate, filter, duration, onAnimationComplete]);

  return (
    <div className={cn("font-bold", className)}>
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="opacity-0"
            style={{ filter: filter ? "blur(10px)" : "none" }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
