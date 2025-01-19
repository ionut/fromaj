import Image from "next/image";
import React from "react";
import ProductSectionItem from "./ProductSectionItem";
import { Products } from "@/utils/types";
import { getQuery } from "@/utils/query";
import Container from "../ui/Container";

const ProductsSection = async () => {
  const { data } = await getQuery("/products?populate=*");

  return (
    <Container>
      <p className="section-title">Platouri fromaj</p>
      <ul className="grid grid-cols-3 gap-8">
        {!data?.length ? (
          <a href="tel:0754 404 000" className="text-error col-span-3">
            Comandați la numărul: 0754 404 000.
          </a>
        ) : (
          data?.map((item: Products) => {
            return (
              <ProductSectionItem
                key={item.attributes.productName}
                item={item}
              />
            );
          })
        )}
      </ul>
      <Image
        src="/images/shape-6.png"
        width="343"
        height="345"
        loading="lazy"
        alt="Fromaj forme"
        className="shape shape-3 move-anim"
      />
    </Container>
  );
};

export default ProductsSection;
