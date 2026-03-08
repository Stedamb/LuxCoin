"use client";

import { MotionDiv } from "@/components/ui/motion";

interface PageTransitionProps {
  children: React.ReactNode;
}

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <MotionDiv
      initial="hidden"
      animate="enter"
      variants={variants}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      {children}
    </MotionDiv>
  );
}
