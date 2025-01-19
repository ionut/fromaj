"use client";
import React, { use, useState } from "react";
import { Cart, Products } from "@/utils/types";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addItem, getCurrentQuantityById } from "../../lib/slice/cartSlice";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
import DeleteItem from "../cart/DeleteItem";
import Link from "next/link";

const ProductSectionItem = ({ item }: { item: Products }) => {
  const dispatch = useAppDispatch();
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

  function handleAddToCart() {
    const newItem: Cart = {
      id: item.id,
      name: name,
      image: pictures?.data[0]?.attributes?.url,
      quantity: 1,
      price: price,
      totalPrice: price * 1,
      slug: slug,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="space-y-4 border border-green p-2 md:p-4 lg:p-6 rounded-md grid grid-rows-subgrid row-span-2">
      <Link href={`/produse/${slug}`} className="space-y-4">
        <figure className="hover:scale-105 ease-in-out duration-200 aspect-square ">
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${pictures.data[0].attributes.url}`}
            width={237}
            height={237}
            loading="lazy"
            alt={name}
            className="object-cover w-full h-full rounded-md"
          />
        </figure>

        <div className="">
          <h3 className="text-xl font-bold">{name}</h3>

          <p className="text-2xl font-bold text-green">{price} ron</p>
        </div>
      </Link>
      <div className="flex items-center">
        <div className="flex gap-4">
          {isInCart && (
            <>
              <UpdateItemQuantity
                productId={id}
                currentQuantity={currentQuantity}
              />
              <DeleteItem productId={id} />
            </>
          )}
        </div>
        <div>
          {!isInCart && (
            <button
              type="button"
              className="button-add-to-cart"
              onClick={handleAddToCart}
            >
              Adaugă în coș
            </button>
          )}
        </div>
      </div>
    </li>
  );
};

export default ProductSectionItem;
