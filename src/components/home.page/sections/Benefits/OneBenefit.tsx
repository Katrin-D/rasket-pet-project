"use client";

import { IBenefit } from "@/types";
import Image from "next/image";
import React from "react";
import BenefitList from "./BenefitList";
import clsx from "clsx";
import { motion, Variants } from "framer-motion";

interface IOneBenefit {
  benefitData: IBenefit;
  imageOnRight: boolean;
}

const containerVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 100,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.9,
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

export const childVariants: Variants = {
  offscreen: {
    opacity: 0,
    x: -50,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1,
    },
  },
};

const OneBenefit = ({ benefitData, imageOnRight }: IOneBenefit) => {
  const { title, description, imageSrc, bullets } = benefitData;

  return (
    <motion.div
      variants={containerVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      className="flex flex-wrap lg:flex-nowrap flex-col lg:flex-row items-center justify-evenly gap-2"
    >
      {/* Text content */}
      <div
        className={clsx("w-full max-w-lg text-center lg:text-left", {
          "lg:order-2": imageOnRight,
        })}
      >
        <motion.div variants={childVariants}>
          <h3 className="font-bold text-3xl lg:text-5xl lg:leading-tight ">
            {title}
          </h3>
          <p className="mt-4 lg:mt-2 text-foreground-muted text-lg leading-normal">
            {description}
          </p>
        </motion.div>
        <div className="mt-8">
          {bullets.map((item) => (
            <BenefitList
              key={item.description}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>

      {/* Image */}
      <div className={clsx("mt-5 lg:mt-0", { "lg:order-1": imageOnRight })}>
        <Image
          src={imageSrc}
          alt="title"
          width="384"
          height="762"
          quality={100}
          className="lg:ml-0"
        />
      </div>
    </motion.div>
  );
};

export default OneBenefit;
