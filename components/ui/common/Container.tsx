import React from "react";
import { twMerge } from "tailwind-merge";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <section className={twMerge("container", className)}>{children}</section>
  );
};

export default Container;
