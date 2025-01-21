import { lora } from "@/styles/fonts";
import React from "react";
import { twMerge } from "tailwind-merge";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <h1
      className={twMerge(
        "text-xl lg:text-2xl font-bold text-white uppercase text-center tracking-[0.2em] after:content-subtitle-icon after:block after:w-[10rem] after:text-white after:mx-auto after:mt-2 after:h-10",
        `${lora.className}`
      )}
    >
      {title}
    </h1>
  );
};

export default SectionTitle;
