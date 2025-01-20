"use client";
import React from "react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  deleteItem,
  getCart,
  getCurrentQuantityById,
  getTotalCartPrice,
  increaseItemQuantityBySelect,
} from "../../lib/slice/cartSlice";
import { Cart } from "@/utils/types";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import {
  ClockIcon,
  QuestionMarkCircleIcon,
  XMarkIcon as XMarkIconMini,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import Container from "../ui/common/Container";

export default function CartCheckout() {
  const cart = useAppSelector<Cart[]>(getCart);
  const subTotal = useAppSelector<number>(getTotalCartPrice);
  const quantities = useAppSelector((state) =>
    cart.map((product) => getCurrentQuantityById(product.id)(state))
  );
  const transportTotal: number = 0;
  const priceTotal = subTotal + transportTotal;
  const dispatch = useAppDispatch();

  const numbers = Array.from({ length: 30 }, (_, index) => index + 1);
  return (
    <Container>
      {!cart.length ? (
        <h1 className="text-error">Coșul dumneavoastră este gol!</h1>
      ) : (
        <>
          <h1 className="text-error">Coșul dumneavoastră</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
            <div aria-labelledby="cart-heading" className="lg:col-span-7">
              <h2 id="cart-heading" className="sr-only">
                Produsele din coșul dumneavoastră
              </h2>

              <ul
                role="list"
                className="divide-y divide-white-alpha-80 border-b border-t border-white-alpha-80"
              >
                {cart.map((product, productIdx) => {
                  return (
                    <li key={product.id} className="flex py-6 sm:py-10">
                      <div className="shrink-0">
                        <Image
                          alt={product.name}
                          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${product.image}`}
                          width={200}
                          height={200}
                          className="size-24 rounded-md object-cover sm:size-48"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                        <div className=" pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                          <div>
                            <div className="flex justify-between">
                              <h3 className="text-xl">
                                <Link
                                  href={`/produse/${product.slug}`}
                                  className="font-semibold text-white hover:text-white-alpha-80"
                                >
                                  {product.name}
                                </Link>
                              </h3>
                            </div>
                            <p className="mt-1 text-lg font-medium text-white-alpha-80">
                              {product.price} RON
                            </p>
                          </div>

                          <div className="mt-4 sm:mt-0">
                            <div className="inline-grid w-full max-w-16 grid-cols-1">
                              <select
                                id={`quantity-${productIdx}`}
                                name={`quantity-${productIdx}`}
                                aria-label={`Quantity, ${product.name}`}
                                className="col-start-1 row-start-1 appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-eerie-black-1 outline outline-1 -outline-offset-1 outline-green focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-green sm:text-sm/6"
                                onChange={(e) =>
                                  dispatch(
                                    increaseItemQuantityBySelect({
                                      id: product.id,
                                      quantity: parseInt(e.target.value),
                                    })
                                  )
                                }
                                defaultValue={quantities[productIdx]}
                              >
                                {numbers.map((number) => (
                                  <option key={number} value={number}>
                                    {number}
                                  </option>
                                ))}
                              </select>
                              <ChevronDownIcon
                                aria-hidden="true"
                                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                              />
                            </div>

                            <div className="float-right">
                              <button
                                type="button"
                                className="-m-2 inline-flex p-2 text-white hover:text-white-alpha-80"
                                onClick={() => dispatch(deleteItem(product.id))}
                              >
                                <span className="sr-only">Remove</span>
                                <XMarkIconMini
                                  aria-hidden="true"
                                  className="size-7"
                                />
                              </button>
                            </div>
                          </div>
                        </div>

                        <p className="mt-4 flex space-x-2 text-lg text-white-alpha-80">
                          <ClockIcon
                            aria-hidden="true"
                            className="size-5 shrink-0 text-white-alpha-80"
                          />

                          <span>Livrare in minimum 24 de ore</span>
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Order summary */}
            <div
              aria-labelledby="summary-heading"
              className="mt-16 rounded-lg bg-green p-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
            >
              <h2
                id="summary-heading"
                className="text-lg font-medium text-white"
              >
                Detalii comandă
              </h2>

              <dl className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-base text-white">Subtotal</dt>
                  <dd className="text-base font-medium text-white">
                    {subTotal} RON
                  </dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="flex items-center text-base text-white">
                    <span>Cost Transport</span>
                    <a
                      href="#"
                      className="ml-2 shrink-0 text-white hover:text-white-alpha-80"
                    >
                      <span className="sr-only">
                        Cum este calculat transportul
                      </span>
                      <QuestionMarkCircleIcon
                        aria-hidden="true"
                        className="size-5"
                      />
                    </a>
                  </dt>
                  <dd className="text-base font-medium text-white">0 RON</dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="text-base font-medium text-white">
                    Order total
                  </dt>
                  <dd className="text-base font-medium text-white">
                    {priceTotal} RON
                  </dd>
                </div>
              </dl>

              <div className="mt-6">
                <Link
                  href="/order"
                  className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-davys-grey focus:outline-none focus:ring-2 focus:ring-wjote focus:ring-offset-2 focus:ring-offset-white"
                >
                  Comandă
                </Link>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Related products */}
      {/* <div aria-labelledby="related-heading" className="mt-24">
        <h2 id="related-heading" className="text-lg font-medium text-gray-900">
          You may also like&hellip;
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {relatedProducts.map((relatedProduct) => (
            <div key={relatedProduct.id} className="">
              <Image
                alt={relatedProduct.imageAlt}
                src={relatedProduct.imageSrc}
                width={200}
                height={200}
                className="aspect-square w-full rounded-md object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={relatedProduct.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {relatedProduct.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {relatedProduct.color}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {relatedProduct.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </Container>
  );
}
