"use client";

import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.03,
    },
  },
};

export const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    color: "var(--foreground)",
    transition: {
      opacity: {
        type: "easeIn",
        duration: 0.2,
      },
      color: {
        type: "easeIn",
        duration: 1.6,
        delay: 0.15,
      },
    },
  },
};

const HeadingMotion = ({ text }: { text: string }) => {
  return (
    <h1
      aria-label="Smart, Secure, Simple Finance"
      className="max-w-lg font-bold leading-none text-5xl xs:text-6xl md:text-8xl  md:max-w-3xl"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {Array.from(text).map((letter, index) => (
          <motion.span
            key={index}
            variants={childVariants}
            aria-hidden="true"
            className="custom-text-stoke text-transparent"
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </h1>
  );
};

export default HeadingMotion;
