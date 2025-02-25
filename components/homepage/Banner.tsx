"use client";
import React from "react";
import { getQuery } from "@/utils/query";
import useSWR from "swr";

interface BannerData {
  data: {
    attributes: {
      text: string;
    };
  };
}

export default function Banner() {
  const { data, error, isLoading } = useSWR<BannerData>("/banner", getQuery, {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  });
  if (error) return;
  if (!data?.data) return;
  return (
    <p className="flex h-14 items-center justify-center bg-davys-grey px-4 text-base font-medium text-white sm:px-6 lg:px-8">
      {data?.data?.attributes?.text}
    </p>
  );
}
