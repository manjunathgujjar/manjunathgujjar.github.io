import { motion, MotionValue, useTransform } from "framer-motion";

interface AnimatedLetterProps {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

export function AnimatedLetter({ children, progress, range }: AnimatedLetterProps) {
  const opacity = useTransform(progress, range, [0.1, 1]);
  return <motion.span style={{ opacity }}>{children}</motion.span>;
}
