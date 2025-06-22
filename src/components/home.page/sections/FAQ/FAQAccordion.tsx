"use client";

import { faqs } from "@/data/faq";
import React, { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { AnimatePresence, motion } from "motion/react";

const FAQAccordion = () => {
  const [expanded, setExpanded] = useState<false | number>(0);

  return (
    <div className="border-b">
      {faqs.map((faq, index) => (
        <div key={index} className="border-t pt-7 pb-4 px-4 flex flex-col">
          <div
            className="flex justify-between items-start cursor-pointer pb-3"
            onClick={() => setExpanded(index === expanded ? false : index)}
          >
            <span className="text-xl md:text-2xl font-semibold">
              {faq.question}
            </span>
            <span className="shrink-0 mt-1.5 ml-2">
              {index === expanded ? (
                <BiMinus className="w-5 h-5 text-secondary" />
              ) : (
                <BiPlus className="w-5 h-5 text-secondary" />
              )}
            </span>
          </div>
          <AnimatePresence initial={false} mode="wait">
            {index === expanded && (
              <motion.div
                className="text-foreground-muted text-lg"
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                {faq.answer}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
