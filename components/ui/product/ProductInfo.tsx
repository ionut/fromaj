import React from "react";

type ProductInfoTypes = {
  name: string;
  price: string;
};

const ProductInfo = ({ name, price }: ProductInfoTypes) => {
  return (
    <div>
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-2xl font-bold text-green">{price} ron</p>
    </div>
  );
};

export default ProductInfo;
