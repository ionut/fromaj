import React from "react";
import { twMerge } from "tailwind-merge";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return (
    <section
      className={twMerge("container pb-12 pt-8 lg:pb-24 lg:pt-16", className)}
    >
      {children}
    </section>
  );
};

export default Container;
