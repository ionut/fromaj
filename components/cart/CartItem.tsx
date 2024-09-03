import { Cart } from "@/utils/types";
import React from "react";
import UpdateItemQuantity from "./UpdateItemQuantity";
import DeleteItem from "./DeleteItem";
import { useSelector } from "react-redux";
import { getCurrentQuantityById } from "./cartSlice";

const CartItem = ({ item }: { item: Cart }) => {
  const { id, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(id));

  return (
    <li className="cart-item">
      <p className="title-3">
        {quantity}&times; {name}
      </p>
      <div className="flex cart-item_details items-center justify-between sm:gap-6">
        <p className="title-3">RON {totalPrice}</p>
        <UpdateItemQuantity productId={id} currentQuantity={currentQuantity} />
        <DeleteItem productId={id} />
      </div>
    </li>
  );
};

export default CartItem;
