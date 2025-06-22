import clsx from "clsx";
import React from "react";

const Container = ({
  children,
  className,
  noPadding,
}: {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}) => {
  return (
    <div
      className={clsx(
        "w-full max-w-(--breakpoint-xl) mx-auto",
        { "px-5": !noPadding },
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
