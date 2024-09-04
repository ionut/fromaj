"use client";
import React from "react";
import { Cart, Products } from "@/utils/types";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addItem, getCurrentQuantityById } from "./cartSlice";
import UpdateItemQuantity from "./UpdateItemQuantity";
import DeleteItem from "./DeleteItem";
import Link from "next/link";
import { getUrl } from "@/utils/utils";

const MenuItem = ({ item, id }: { item: Products; id: number }) => {
  const dispatch = useAppDispatch();
  const { image, productName: name, slug, price, description } = item;
  const currentQuantity = useAppSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;
  console.log(image.data.attributes.url);
  function handleAddToCart() {
    const newItem: Cart = {
      id: id,
      name: name,
      quantity: 1,
      price: price,
      totalPrice: price * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="list-flex gap-20">
      <div className="menu-card hover:card">
        <figure className="card-banner img-holder">
          <Link href={`/produse/${slug}`}>
            <Image
              src={`${getUrl()}${image.data.attributes.url}`}
              width="100"
              height="100"
              loading="lazy"
              alt={name}
              className="img-cover size-10"
            />
          </Link>
        </figure>

        <div>
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
      </div>
      <div className="row justify-end">
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
    </li>
  );
};

export default MenuItem;
