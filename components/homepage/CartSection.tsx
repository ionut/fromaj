"use client";
import React from "react";
import { useAppSelector } from "@/lib/hooks";
import { IoCartOutline } from "react-icons/io5";
import { getTotalCartQuantity } from "../features/cart/cartSlice";

const CartSection = () => {
  const totalQuantity = useAppSelector(getTotalCartQuantity);
  return (
    <div className="hero-btn has-after">
      <div className="cart-block">
        <IoCartOutline className="cart-button" />
        <p className="cart-quantity">{totalQuantity}</p>
      </div>
    </div>
  );
};

export default CartSection;
