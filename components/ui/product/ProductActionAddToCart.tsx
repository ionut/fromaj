"use client";

import DeleteItem from "@/components/cart/DeleteItem";
import UpdateItemQuantity from "@/components/cart/UpdateItemQuantity";
import Button from "@/components/ui/common/Button"; // Import your new Button component
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addItem, getCurrentQuantityById } from "@/lib/slice/cartSlice";
import { Cart, Products } from "@/utils/types";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

type ButtonsPosition = "start" | "center";

const ProductActionAddToCart = ({
  item,
  position,
}: {
  item: Products;
  position: ButtonsPosition;
}) => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Se adaugă");

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

  const buttonAlignmentStyle = {
    center: "justify-center text-white",
    start: "justify-start text-eerie-black-1",
  };

  const style = twMerge(
    "flex items-center gap-2",
    buttonAlignmentStyle[position]
  );

  return (
    <div className={twMerge("flex items-center gap-2", style)}>
      {isInCart && !isLoading ? (
        <>
          <div className="flex items-center gap-2">
            <UpdateItemQuantity
              productId={item.id}
              currentQuantity={currentQuantity}
            />
            <DeleteItem productId={item.id} />
          </div>
          <Button href="/order" variant="primary">
            Comandă
          </Button>
        </>
      ) : (
        <Button
          onClick={handleAddToCart}
          isLoading={isLoading}
          loadingText={loadingText}
          variant="primary"
        >
          Adaugă în coș
        </Button>
      )}
    </div>
  );
};

export default ProductActionAddToCart;
