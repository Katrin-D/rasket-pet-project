import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
  {
    score: 20,
    suffix: "M+",
    icon: <BsBarChartFill size={34} className="text-blue-500" />,
    description:
      "Transactions processed securely every day, providing real-time insights.",
  },
  {
    score: 5,
    suffix: ".0",
    icon: <BsFillStarFill size={34} className="text-yellow-500" />,
    description: "Star rating, consistently maintained across app stores.",
  },
  {
    score: 200,
    suffix: "+",
    icon: <PiGlobeFill size={34} className="text-green-600" />,
    description:
      "Financial Institutions, seamlessly integrated, so you can manage all accounts.",
  },
];
