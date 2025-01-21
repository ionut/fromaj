import Image from "next/image";
import React from "react";
import ProductSectionItem from "./ProductSectionItem";
import { Products } from "@/utils/types";
import { getQuery } from "@/utils/query";
import Container from "../ui/common/Container";
import SectionTitle from "../ui/common/SectionTitle";

const ProductsSection = async () => {
  const { data } = await getQuery("/products?populate=*");

  return (
    <div className="bg-product-sections bg-cover bg-center -my-[10%]">
      <Container className="py-[15%]">
        <SectionTitle title="Platouri fromaj" />
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-3 xl:gap-6 mt-10">
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
    </div>
  );
};

export default ProductsSection;
