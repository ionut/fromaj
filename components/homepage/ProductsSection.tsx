"use client";
import React from "react";
import ProductSectionItem from "../ui/product/ProductSectionItem";
import { Products } from "@/utils/types";
import { getQuery } from "@/utils/query";
import Container from "../ui/common/Container";
import SectionTitle from "../ui/common/SectionTitle";
import useSWR from "swr";

const ProductsSection = () => {
  const { data, error } = useSWR("/products?populate=*", getQuery);

  if (error) {
    return (
      <a href="tel:0754 404 000" className="text-error col-span-3">
        Comandați la numărul: 0754 404 000.
      </a>
    );
  }
  return (
    <div className="bg-product-sections bg-cover bg-center md:-my-[10%] md:py-[10%]">
      <Container>
        <SectionTitle title="Platouri fromaj" />
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-3 xl:gap-6 mt-10">
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
