import { lora } from "@/styles/fonts";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <>
      <h1
        className={twMerge(
          "text-2xl lg:text-3xl font-bold text-white uppercase text-center tracking-[0.1em] mb-2",
          `${lora.className}`
        )}
      >
        {title}
      </h1>
      <Image
        src="/images/separator-white.svg"
        width={160}
        height={40}
        alt="Separator decorativ Fromaj - Element grafic pentru titluri secțiuni"
        className="mx-auto w-40 h-10"
      />
    </>
  );
};

export default SectionTitle;
