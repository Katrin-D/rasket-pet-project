import React from "react";
import OneBenefit from "./OneBenefit";
import { benefits } from "@/data/benefits";

const Benefits = () => {
  return (
    <section
      id="features"
      className="scroll-mt-20 md:scroll-m-0 pt-10 md:pt-20 xl:pt-32"
    >
      <h2 className="sr-only">Benefits</h2>
      <div className="space-y-24 mb-10">
        {benefits.map((benefit, index) => (
          <OneBenefit
            key={benefit.title}
            benefitData={benefit}
            imageOnRight={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
};

export default Benefits;
