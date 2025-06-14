"use client";

import { logos } from "@/data/logos";
import { motion } from "framer-motion";

const itemVariants = {
  animate: (i: number) => ({
    opacity: [0, 1, 1, 0], //fade in (0 to 1), hold (1), fade out (1 to 0)
    y: [20, 0, 0, -20], //move from bottom (20) to center (0), hold (0), move up (0 to -20)
    transition: {
      duration: 3.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 1,
      delay: i * 0.2,
    },
  }),
};

const Logos = () => {
  return (
    <section
      id="logos"
      className="bg-background pt-20 hidden md:block xl:pt-32"
    >
      <p className="text-xl font-medium text-center">
        Trusted by <span className="text-secondary">2000+</span> customers
        worldwide
      </p>
      <div className="flex justify-center items-center h-32">
        <div className="flex gap-8">
          {logos.map((Logo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate="animate"
              custom={idx}
              variants={itemVariants}
            >
              <Logo />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logos;
