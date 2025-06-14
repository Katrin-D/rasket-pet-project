import Link from "next/link";
import React from "react";
import { RxRocket } from "react-icons/rx";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <RxRocket className="text-foreground min-w-fit w-7 h-7" />
      <span className="manrope text-xl font-semibold text-foreground">
        Rasket
      </span>
    </Link>
  );
};

export default Logo;
