"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: Variants;
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  inViewMargin?: string; // Only accept CSS margin string
  blur?: string;
}

const BlurFade = ({
  children,
  className,
  variant,
  inViewMargin = "0px",
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  inView = false,
  blur = "6px",
}: BlurFadeProps) => {
  const ref = useRef(null);
  
  const inViewResult = useInView(ref, { 
    once: true,
    margin: inViewMargin as any // Cast to 'any' or 'MarginType' if imported
  });

  const isInView = !inView || inViewResult;

  const defaultVariants: Variants = {
    hidden: { 
      y: yOffset, 
      opacity: 0, 
      filter: `blur(${blur})` 
    },
    visible: { 
      y: 0, 
      opacity: 1, 
      filter: "blur(0px)" 
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variant || defaultVariants}
      transition={{
        delay: delay + 0.04,
        duration,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default BlurFade;