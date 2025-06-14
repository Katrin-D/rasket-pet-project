import DownloadButton from "@/components/DownloadButton";
import { ctaDetails } from "@/data/cta";
import React from "react";

const CTA = () => {
  return (
    <section id="cta" className="scroll-mt-20 md:scroll-m-0 py-10 lg:py-20">
      <div className="bg-foreground rounded-3xl flex flex-col items-center text-white text-center px-5 py-12 sm:py-20">
        <h2 className="max-w-2xl text-2xl sm:text-3xl md:text-5xl md:leading-tight font-semibold mb-4 text-balance">
          {ctaDetails.heading}
        </h2>
        <p className="text-lg max-w-xl">{ctaDetails.subheading}</p>
        <div className="flex gap-4 flex-wrap mt-8 items-center justify-center">
          <DownloadButton platform="appStore" />
          <DownloadButton platform="googlePlay" />
        </div>
      </div>
    </section>
  );
};

export default CTA;
