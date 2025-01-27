import Image from "next/image";
import Link from "next/link";
import React from "react";

type ImageTypes = {
  href: string;
  imageUrl: string;
  name: string;
};

const ProductImage = ({ href, imageUrl, name }: ImageTypes) => {
  return (
    <Link href={href}>
      <figure className="hover:scale-105 ease-in-out duration-200 aspect-square">
        <Image
          src={imageUrl}
          width={237}
          height={237}
          alt={name}
          className="object-cover w-full h-full rounded-md"
        />
      </figure>
    </Link>
  );
};

export default ProductImage;
