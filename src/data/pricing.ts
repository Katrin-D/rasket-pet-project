import { IPricing } from "@/types";

export const priceData: IPricing[] = [
  {
    name: "Starter",
    price: 29,
    features: [
      "Simple cloud integration",
      "Up to 5 team members",
      "20GB storage",
      "Email support",
    ],
  },
  {
    name: "Pro",
    price: 99,
    features: [
      "Advanced cloud integration",
      "Up to 20 team members",
      "100GB storage",
      "Priority email & phone support",
      "Advanced analytics",
    ],
  },
  {
    name: "Enterprise",
    price: -1,
    features: [
      "Full cloud integration",
      "Unlimited team members",
      "Unlimited storage",
      "24/7 dedicated support",
      "Custom solutions",
      "On-site training",
    ],
  },
];
