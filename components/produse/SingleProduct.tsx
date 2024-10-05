"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Cart, Products } from "@/utils/types";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
import DeleteItem from "../cart/DeleteItem";
import Link from "next/link";
const SingleProduct = ({
  product,
  relatedProducts,
}: {
  product: Products;
  relatedProducts: Products[];
}) => {
  const dispatch = useAppDispatch();
  const { id } = product;
  const {
    productName: name,
    price,
    weight,
    description,
    pictures,
    personNumber,
  } = product.attributes;

  const [mainImage, setMainImage] = useState(pictures.data[0].attributes.url);
  const currentQuantity = useAppSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  const handleClick = (id: number) => {
    setMainImage(pictures.data[id].attributes.url);
  };

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
    <>
      <section className="product-section">
        <div className="container product-section-block">
          <div className="product-section-block_col">
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${mainImage}`}
              width="285"
              height="336"
              loading="lazy"
              alt={name}
              className="img-cover"
            />
            <div className="row gap-10 overflow-scroll">
              {pictures?.data?.map((picture: any, index: number) => {
                return (
                  <Image
                    key={index}
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${picture.attributes.url}`}
                    width={100}
                    height={100}
                    alt="image"
                    className="other-images"
                    onClick={() => handleClick(index)}
                  />
                );
              })}
            </div>
          </div>
          <div className="product-section-block_col">
            <h2 className="headline-1 section-title">
              <span>{name}</span>
            </h2>
            <div className="product-attributes">
              <div className="product-attribute">
                <p className="title-2">Pret:</p>
                <p className="title-2 product-attribute_detail">{price} RON</p>
              </div>
              <div className="product-attribute">
                <p className="title-2">Greutate:</p>
                <p className="title-2 product-attribute_detail">{weight} kg</p>
              </div>
              <div className="product-attribute">
                <p className="title-2">Disponibilitate:</p>
                <p className="title-2 product-attribute_detail">In stoc!</p>
              </div>
              <div className="product-attribute">
                <p className="title-2">Recomandare:</p>
                <p className="title-2 product-attribute_detail">
                  {personNumber} persoane
                </p>
              </div>
            </div>

            <p className="section-text">{description}</p>
            <div className="row justify-start">
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
        </div>
      </section>
      <section className="section menu">
        <div className="container">
          <p className="section-subtitle text-center label-2">
            Selecție Specială
          </p>

          <h2 className="headline-1 section-title text-center">
            Produse Recomandate
          </h2>
          <div className="row gap-20">
            {relatedProducts.map((relatedProduct: any) => {
              const {
                productName: name,
                price,
                pictures,
                slug,
              } = relatedProduct.attributes;
              return (
                <div key={name} className="related-product">
                  <Link href={`/produse/${slug}`}>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${pictures.data[0].attributes.url}`}
                      width="5000"
                      height="5000"
                      loading="lazy"
                      alt={name}
                      className="img-cover"
                    />
                  </Link>
                  <div>
                    <Link href={`/produse/${slug}`}>
                      <p className="title-3 text-center">{name}</p>
                    </Link>
                    <p className="body-2 text-center">{price} RON</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
