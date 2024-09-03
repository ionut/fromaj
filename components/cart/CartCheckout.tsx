"use client";
import React from "react";
import Link from "next/link";
import { useAppSelector } from "@/lib/hooks";
import { getCart, getTotalCartPrice } from "./cartSlice";
import CartItem from "./CartItem";
import { Cart } from "@/utils/types";
import Button from "../ui/Button";

const CartCheckout = () => {
  const cart = useAppSelector<Cart[]>(getCart);
  const totalPrice = useAppSelector<number>(getTotalCartPrice);
  return (
    <section className="checkout">
      <div className="container w-full">
        <Link href="/" className="btn-back">
          &larr; Prima pagină
        </Link>

        {cart.length ? (
          <>
            <h2 className="title-1 checkout-title">Coșul dumneavoastră:</h2>

            <ul>
              {cart.map((item) => (
                <CartItem item={item} key={item.name} />
              ))}
            </ul>

            <div className="checkout-block_btn">
              <Button goTo="/order" text="Comandă" />
              <h3 className="title-1 checkout-title">
                Total: {totalPrice} RON
              </h3>
            </div>
          </>
        ) : (
          <h2 className="title-1 checkout-title">
            Coșul dumneavoastră este gol!
          </h2>
        )}
      </div>
    </section>
  );
};

export default CartCheckout;
