"use client";
import React, { use, useState } from "react";
import { Cart, Products } from "@/utils/types";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addItem, getCurrentQuantityById } from "../../lib/slice/cartSlice";
import UpdateItemQuantity from "./UpdateItemQuantity";
import DeleteItem from "./DeleteItem";
import Link from "next/link";

const MenuItem = ({ item }: { item: Products }) => {
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
      quantity: 1,
      price: price,
      totalPrice: price * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li>
      <div className="menu-card hover:card">
        <figure className="menu-card_item">
          <Link href={`/produse/${slug}`}>
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${pictures.data[0].attributes.url}`}
              width={237}
              height={237}
              loading="lazy"
              alt={name}
              className="img-cover"
            />
          </Link>
        </figure>
        <div className="menu-card_item">
          <div className="title-wrapper">
            <h3 className="title-3">
              <Link href={`/produse/${slug}`} className="card-title">
                {name}
              </Link>
            </h3>

            <span className="span title-2">{price} ron</span>
          </div>

          <p className="card-text label-1">{description}</p>
        </div>
        <div className="menu-card_item">
          <div className="col-2 row gap-20">
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
          <div className="col-10">
            {!isInCart && (
              <button
                type="button"
                className="btn-add-to-cart"
                onClick={handleAddToCart}
              >
                Adaugă în coș
              </button>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default MenuItem;
