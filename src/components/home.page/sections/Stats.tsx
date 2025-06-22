"use client";

import { stats } from "@/data/stats";
import { countDecimalPlaces } from "@/utils";
import React from "react";
import CountUp from "react-countup";

const Stats = () => {
  return (
    <section id="stats" className="scroll-mt-20 md:scroll-m-0 py-10 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        {stats.map(({ description, score, suffix, icon }) => (
          <div
            key={description}
            className="text-center md:text-left max-w-sm md:max-w-full"
          >
            <div className="manrope text-3xl font-semibold mb-5 flex items-center gap-2 justify-center md:justify-start">
              {icon}
              <CountUp
                end={score}
                duration={5}
                suffix={suffix}
                decimals={countDecimalPlaces(score)}
                enableScrollSpy={true}
                scrollSpyOnce={true}
                scrollSpyDelay={300}
              />
            </div>
            <p className="text-foreground-muted text-lg text-pretty">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
