import { lora } from "@/styles/fonts";
import React from "react";
import { twMerge } from "tailwind-merge";

const SectionTitle = ({
  title,
  className,
}: {
  title: string;
  className: string;
}) => {
  return (
    <>
      <h1
        className={twMerge(
          "text-3xl lg:text-5xl font-bold  uppercase text-center tracking-[0.1em] mb-2",
          `${lora.className} ${className}`
        )}
      >
        {title}
      </h1>
    </>
  );
};

export default SectionTitle;
