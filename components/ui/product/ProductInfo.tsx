import React from "react";

type ProductInfoTypes = {
  name: string;
  price: string;
};

const ProductInfo = ({ name, price }: ProductInfoTypes) => {
  return (
    <div className="text-center ">
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-2xl font-bold">{price} ron</p>
    </div>
  );
};

export default ProductInfo;
