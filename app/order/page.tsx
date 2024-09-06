"use client";
import OrderForm from "@/components/order/OrderForm";
import React from "react";
import { useAppSelector } from "@/lib/hooks";
import { Cart } from "@/utils/types";
import { getCart, getTotalCartPrice } from "@/components/cart/cartSlice";
import Link from "next/link";

const NewOrder = () => {
  const cart = useAppSelector<Cart[]>(getCart);
  const totalPrice = useAppSelector<number>(getTotalCartPrice);
  return (
    <section className="checkout">
      <div className="container checkout-block">
        {!cart.length ? (
          <>
            <Link href="/" className="btn-back">
              &larr; Prima pagină
            </Link>
            <h2 className="title-1 checkout-title">
              Coșul dumneavoastră este gol!
            </h2>
          </>
        ) : (
          <>
            <OrderForm cart={cart} />
            <div>
              <h1 className="title-1 mb-2">Coșul dumneavoastră</h1>
              <ul className="mb-2">
                {cart.map((item) => {
                  return (
                    <li key={item.name} className="cart-item ">
                      <p className="title-2">
                        {item.quantity}&times; {item.name}
                      </p>
                    </li>
                  );
                })}
              </ul>
              <p className="title-1 text-right">RON {totalPrice}</p>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default NewOrder;
