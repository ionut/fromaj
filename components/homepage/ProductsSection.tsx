"use client";
import React from "react";
import ProductSectionItem from "../ui/product/ProductSectionItem";
import { Products } from "@/utils/types";
import { getQuery } from "@/utils/query";
import Container from "../ui/common/Container";
import SectionTitle from "../ui/common/SectionTitle";
import useSWR from "swr";
import Skeleton from "../ui/common/Skeleton";

const ProductsSection = () => {
  const { data, error, isLoading } = useSWR("/products?populate=*", getQuery);

  if (error) {
    return (
      <a href="tel:0754 404 000" className="text-error col-span-3">
        Comandați la numărul: 0754 404 000.
      </a>
    );
  }

  if (isLoading) {
    return (
      <div className="bg-product-sections bg-cover bg-center md:-my-[10%] md:py-[10%]">
        <Container homeSection={true}>
          <SectionTitle title="Platouri fromaj" className="text-white" />
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-3 lg:grid-cols-3 xl:gap-6 mt-10">
            {Array.from({ length: 6 }, (v, i) => i).map((i) => (
              <Skeleton key={i} />
            ))}
          </ul>
        </Container>
      </div>
    );
  }
  return (
    <div className="bg-product-sections bg-cover bg-center md:-my-[10%] md:py-[10%]">
      <Container homeSection={true}>
        <SectionTitle title="Platouri fromaj" className="text-white" />
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-3 lg:grid-cols-3 xl:gap-6 mt-10">
          {data?.data?.map((item: Products) => {
            return (
              <ProductSectionItem
                key={item.attributes.productName}
                item={item}
              />
            );
          })}
        </ul>
      </Container>
    </div>
  );
};

export default ProductsSection;
