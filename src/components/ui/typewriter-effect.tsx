"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TypewriterEffectProps {
  words: { text: string; className?: string }[];
  className?: string;
  cursorClassName?: string;
}

export default function TypewriterEffect({
  words,
  className,
  cursorClassName,
}: TypewriterEffectProps) {
  return (
    <div className={cn("text-center inline-block", className)}>
      {words.map((word, idxWord) => (
        <span key={idxWord} className="inline-block mr-1">
          {word.text.split("").map((char, idxChar) => (
            <motion.span
              key={idxChar}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: idxWord * 0.3 + idxChar * 0.05,
                duration: 0.05,
              }}
              className={cn(
                "text-white text-xs sm:text-sm md:text-base",
                word.className
              )}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}

      {/* Cursor que parpadea */}
      <motion.span
        className={cn(
          "inline-block w-[2px] h-4 md:h-5 bg-white ml-1",
          cursorClassName
        )}
        animate={{ opacity: [0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8, repeatType: "reverse" }}
      />
    </div>
  );
}
