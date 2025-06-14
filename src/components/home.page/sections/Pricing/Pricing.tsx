import React from "react";
import PriceCard from "./PriceCard";
import { priceData } from "@/data/pricing";

const Pricing = () => {
  return (
    <section id="pricing" className="scroll-mt-20 md:scroll-m-0 py-10 lg:py-20">
      <h2 className="text-center mb-4 text-3xl lg:text-5xl lg:leading-tight font-bold">
        Pricing
      </h2>
      <p className="mb-12 text-center">
        Simple, transparent pricing. No surprises.
      </p>

      {/* Price cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center">
        {priceData.map((item, index) => (
          <PriceCard key={item.name} data={item} isHighlighted={index === 1} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
