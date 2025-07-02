import React from "react";
import { twMerge } from "tailwind-merge";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  homeSection?: boolean;
};

const Container = ({ children, className, homeSection }: ContainerProps) => {
  const paddingTopStyle = homeSection && "pb-12 lg:pb-24";

  return (
    <section
      className={twMerge("container pt-8 lg:pt-16", className, paddingTopStyle)}
    >
      {children}
    </section>
  );
};

export default Container;
