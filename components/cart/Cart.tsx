"use client";
import React, { useState } from "react";
import { useAppSelector } from "@/lib/hooks";
import { IoCartOutline } from "react-icons/io5";
import { getTotalCartQuantity } from "./cartSlice";
import { useRouter } from "next/navigation";
import Tooltip from "../ui/Tooltip";

const Cart = () => {
  const router = useRouter();
  const totalQuantity = useAppSelector(getTotalCartQuantity);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    if (totalQuantity === 0) {
      setShowTooltip(true);

      setTimeout(() => {
        setShowTooltip(false);
      }, 5000);

      return;
    }
    router.push("/cart");
  };

  return (
    <>
      <div
        className={`hero-btn ${totalQuantity > 0 && "has-after"}`}
        aria-disabled="true"
        onClick={handleClick}
      >
        <div className="cart-block">
          <IoCartOutline className="cart-button" />
          <p className="cart-quantity">{totalQuantity}</p>
        </div>
        {showTooltip && <Tooltip />}
      </div>
    </>
  );
};

export default Cart;
