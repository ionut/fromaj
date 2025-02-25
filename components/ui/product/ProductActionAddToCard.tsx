"use client";

import DeleteItem from "@/components/cart/DeleteItem";
import UpdateItemQuantity from "@/components/cart/UpdateItemQuantity";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addItem, getCurrentQuantityById } from "@/lib/slice/cartSlice";
import { Cart, Products } from "@/utils/types";
import Link from "next/link";
import React, { useState } from "react";

const ProductActionAddToCard = ({ item }: { item: Products }) => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Adaugă în coș");

  const currentQuantity = useAppSelector(getCurrentQuantityById(item.id));
  const isInCart = currentQuantity > 0;
  function handleAddToCart() {
    setIsLoading(true);
    setLoadingText("Se adaugă");
    const newItem: Cart = {
      id: item.id,
      name: item.attributes.productName,
      image: item.attributes.pictures?.data[0]?.attributes?.url,
      quantity: 1,
      price: item.attributes.price,
      totalPrice: item.attributes.price * 1,
      slug: item.attributes.slug,
    };

    try {
      dispatch(addItem(newItem));
    } catch (error) {
      setLoadingText("Incearcă din nou");
    } finally {
      setTimeout(() => {
        setIsLoading(false);
        setLoadingText("Adaugă în coș");
      }, 500);
    }
  }

  return (
    <div className="flex items-center h-[56px]">
      {isInCart && !isLoading ? (
        <div className="flex gap-4">
          <UpdateItemQuantity
            productId={item.id}
            currentQuantity={currentQuantity}
          />
          <DeleteItem productId={item.id} />
          <Link
            href="/checkout"
            className="text-white outline outline-1 outline-white rounded-2xl text-xl font-bold flex justify-center items-center p-3 shadow-lg bg-green hover:transition-colors hover:bg-davys-grey hover:outline-davys-grey focus:outline-2 xl:text-2xl xl:px-6"
          >
            Comandă
          </Link>
        </div>
      ) : (
        <button
          type="button"
          className="text-white outline outline-1 outline-white rounded-2xl text-xl font-bold flex justify-center items-center p-3 shadow-lg bg-green hover:transition-colors hover:bg-davys-grey hover:outline-davys-grey focus:outline-2 xl:text-2xl xl:px-6"
          onClick={handleAddToCart}
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              {loadingText}
            </span>
          ) : (
            "Adaugă în coș"
          )}
        </button>
      )}
    </div>
  );
};

export default ProductActionAddToCard;
