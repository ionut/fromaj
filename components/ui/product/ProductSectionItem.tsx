import React from "react";
import { Products } from "@/utils/types";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductActionAddToCard from "./ProductActionAddToCard";

const ProductSectionItem = ({ item }: { item: Products }) => {
  const { productName: name, slug, price, pictures } = item.attributes;

  const imageUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}${pictures.data[0].attributes.url}?format=webp`;

  return (
    <li className="space-y-2 border border-green/40 shadow-2xl p-2 md:p-4 lg:p-6 rounded-xl grid grid-rows-subgrid row-span-3">
      <ProductImage href={`/produse/${slug}`} imageUrl={imageUrl} name={name} />
      <ProductInfo name={name} price={price} />
      <ProductActionAddToCard item={item} />
    </li>
  );
};

export default ProductSectionItem;
