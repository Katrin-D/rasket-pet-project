import React from "react";
import FAQAccordion from "./FAQAccordion";

const FAQ = () => {
  return (
    <section id="faq" className="scroll-mt-20 md:scroll-m-0 py-10 lg:py-20">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className=" text-center lg:text-left">
          <p className="uppercase text-lg text-foreground-muted mb-3">
            faq&apos;s
          </p>
          <h2 className="text-3xl lg:text-5xl lg:leading-snug font-bold lg:max-w-sm ">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-foreground-muted mt-4 lg:mt-10">
            Ask us anything!
          </p>
          <a
            href="mailto:help@rasket.com"
            className="inline-block text-secondary font-semibold text-xl lg:text-4xl mt-3 over:underline"
          >
            help@rasket.com
          </a>
        </div>
        <div className="w-full lg:max-w-2xl">
          <FAQAccordion />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
