"use client";
import React, { use, useState } from "react";
import { Cart, Products } from "@/utils/types";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addItem, getCurrentQuantityById } from "../../lib/slice/cartSlice";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
import DeleteItem from "../cart/DeleteItem";
import ProductImage from "../ui/product/ProductImage";
import ProductInfo from "../ui/product/ProductInfo";

const ProductSectionItem = ({ item }: { item: Products }) => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Adaugă în coș");

  const { id } = item;
  const {
    productName: name,
    slug,
    price,
    description,
    pictures,
  } = item.attributes;

  const currentQuantity = useAppSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;
  const imageUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}${pictures.data[0].attributes.url}?format=webp`;

  function handleAddToCart() {
    setIsLoading(true);
    setLoadingText("Se adaugă");
    const newItem: Cart = {
      id: item.id,
      name: name,
      image: pictures?.data[0]?.attributes?.url,
      quantity: 1,
      price: price,
      totalPrice: price * 1,
      slug: slug,
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
    <li className="space-y-2 border border-green/40 shadow-2xl p-2 md:p-4 lg:p-6 rounded-xl grid grid-rows-subgrid row-span-3">
      <ProductImage href={`/produse/${slug}`} imageUrl={imageUrl} name={name} />
      <ProductInfo name={name} price={price} />

      <div className="flex items-center justify-center">
        <div className="flex gap-4">
          {isInCart && !isLoading ? (
            <>
              <UpdateItemQuantity
                productId={id}
                currentQuantity={currentQuantity}
              />
              <DeleteItem productId={id} />
            </>
          ) : (
            <button
              type="button"
              className="button-add-to-cart"
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
      </div>
    </li>
  );
};

export default ProductSectionItem;
