import { IPricing } from "@/types";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

interface IPriceCard {
  data: IPricing;
  isHighlighted: boolean;
}

const PriceCard = ({ data, isHighlighted }: IPriceCard) => {
  const { name, price, features } = data;
  return (
    <div
      className={clsx(
        "w-full max-w-sm border border-gray-200 rounded-xl bg-white lg:max-w-full",
        {
          "shadow-md lg:-translate-y-4": isHighlighted,
        }
      )}
    >
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-2xl font-semibold mb-4">{name}</h3>
        <p
          className={clsx("text-3xl md:text-5xl font-bold mb-6", {
            "text-secondary": isHighlighted,
          })}
        >
          {price !== -1 ? (
            <>
              ${price}
              <span className="text-lg text-gray-500 font-normal">/mo</span>
            </>
          ) : (
            "Custom"
          )}
        </p>

        <Link
          href="/"
          className="w-full text-center inline-block text-black px-8 py-3 bg-primary hover:bg-primary-accent transition-colors rounded-full"
        >
          Get Started
        </Link>
      </div>
      <div className="p-6">
        <p className="text-lg font-bold uppercase">Features</p>
        <p className="text-foreground-muted mb-5">All basic options, plus...</p>
        <ul className="space-y-4 mb-8">
          {features.map((item) => (
            <li key={item} className="flex items-center flex-nowrap">
              <BsFillCheckCircleFill className="h-5 w-5 text-secondary mr-2" />
              <span className="text-foreground-muted text-lg">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PriceCard;
