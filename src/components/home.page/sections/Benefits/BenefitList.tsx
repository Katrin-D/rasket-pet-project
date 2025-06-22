import { IBenefitList } from "@/types";
import { motion } from "motion/react";
import { childVariants } from "./OneBenefit";

const BenefitList = ({ title, description, icon }: IBenefitList) => {
  return (
    <ul>
      <motion.li
        variants={childVariants}
        className="flex flex-col lg:flex-row items-center gap-3 lg:gap-5 mt-8"
      >
        <div className="w-fit">{icon}</div>
        <div>
          <h4 className="text-lg font-semibold">{title}</h4>
          <p className="text-base text-foreground-muted">{description}</p>
        </div>
      </motion.li>
    </ul>
  );
};

export default BenefitList;
