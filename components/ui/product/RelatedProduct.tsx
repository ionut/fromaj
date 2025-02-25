import { Products } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RelatedProduct = ({ relatedProduct }: { relatedProduct: Products }) => {
  const {
    productName: name,
    price,
    pictures,
    slug,
  } = relatedProduct.attributes;

  return (
    <div className="related-product">
      <Link href={`/produse/${slug}`}>
        <Image
          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${pictures.data[0].attributes.url}`}
          width={277}
          height={277}
          loading="lazy"
          alt={name}
          className="img-cover"
        />
        <span className="body-3 text-center">{name}</span>
        <span className="body-3 text-center">{price} RON</span>
      </Link>
    </div>
  );
};

export default RelatedProduct;
