import { IconType } from "react-icons";

import type { JSX } from "react";

export interface IMenuItem {
  text: string;
  url: string;
}

export type SocialName =
  | "github"
  | "x"
  | "twitter"
  | "facebook"
  | "youtube"
  | "linkedin"
  | "threads"
  | "instagram";

export type ISocials = Partial<Record<SocialName, string>>;

export type ISocialsIcons = Partial<Record<SocialName, IconType>>;

export interface IBenefit {
  title: string;
  description: string;
  bullets: IBenefitList[];
  imageSrc: string;
}

export interface IBenefitList {
  title: string;
  description: string;
  icon: JSX.Element;
}

export interface IPricing {
  name: string;
  price: number;
  features: string[];
}

export interface ITestimonial {
  name: string;
  role: string;
  message: string;
  avatar: string;
}

export interface IFAQ {
  question: string;
  answer: string;
}

export interface IStats {
  score: number;
  suffix: string;
  icon: JSX.Element;
  description: string;
}
