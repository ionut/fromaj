"use client";

import OrderForm from "@/components/forms/OrderForm";
import Container from "@/components/ui/common/Container";
import { useAppSelector } from "@/lib/hooks";
import { getCart, getTotalCartPrice } from "@/lib/slice/cartSlice";
import { Cart } from "@/utils/types";
import {
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

export default function OrderPage() {
  const cart = useAppSelector<Cart[]>(getCart);
  const totalPrice = useAppSelector<number>(getTotalCartPrice);
  return (
    <div>
      <div
        aria-hidden="true"
        className="fixed left-0 top-0 -z-10 hidden h-full w-1/2  lg:block"
      />
      <div
        aria-hidden="true"
        className="fixed right-0 top-0 -z-10 hidden h-full w-1/2 bg-green/30 lg:block"
      />

      <Container className="grid grid-cols-1 gap-x-16 lg:grid-cols-2 lg:px-8 xl:gap-x-40">
        <h1 className="sr-only">Informatii Comandă</h1>

        <section
          aria-labelledby="summary-heading"
          className="bg-gray-50 lg:col-start-2 lg:row-start-1 lg:bg-transparent"
        >
          <div className="mx-auto max-w-lg lg:max-w-none">
            <ul
              role="list"
              className="hidden divide-y divide-eerie-black-1 text-base font-medium text-white lg:block"
            >
              {cart.map((product) => (
                <li
                  key={product.id}
                  className="flex items-center space-x-4 py-6"
                >
                  <Image
                    alt={product.name}
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${product.image}`}
                    width={200}
                    height={200}
                    className="size-36 flex-none rounded-md object-cover"
                  />
                  <div className="flex-auto space-y-1">
                    <h3 className="text-lg text-eerie-black-1">
                      {product.name}
                    </h3>
                  </div>
                  <p className="flex-none text-lg font-medium text-eerie-black-1">
                    {product.quantity} x {product.price} RON
                  </p>
                </li>
              ))}
            </ul>

            <dl className="hidden space-y-6 pt-6 text-sm font-medium text-gray-900 lg:block">
              <div className="flex items-center justify-between border-t border-eerie-black-1 pt-6">
                <dt className="text-lg text-eerie-black-1">Total</dt>
                <dd className="text-lg text-eerie-black-1">{totalPrice} RON</dd>
              </div>
            </dl>

            <Popover className="fixed inset-x-0 bottom-0 flex flex-col-reverse text-sm font-medium text-gray-900 lg:hidden">
              <div className="relative z-10 bg-green px-4 sm:px-6">
                <div className="mx-auto max-w-lg">
                  <PopoverButton className="flex w-full items-center py-6 font-medium">
                    <span className="mr-auto text-lg">Total</span>
                    <span className="mr-2 text-lg">{totalPrice} RON</span>
                    <ChevronUpIcon
                      aria-hidden="true"
                      className="size-5 text-white"
                    />
                  </PopoverButton>
                </div>
              </div>

              <PopoverBackdrop
                transition
                className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
              />

              <PopoverPanel
                transition
                className="relative transform bg-green px-4 py-6 transition duration-300 ease-in-out border-b border-gray-200 data-[closed]:translate-y-full sm:px-6"
              >
                <ul
                  role="list"
                  className="divide-y divide-white-alpha-80 text-base font-medium text-white"
                >
                  {cart.map((product) => (
                    <li
                      key={product.id}
                      className="flex items-center space-x-4 py-2"
                    >
                      <Image
                        alt={product.name}
                        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${product.image}`}
                        width={200}
                        height={200}
                        className="size-20 flex-none rounded-md object-cover"
                      />
                      <div className="flex-auto space-y-1">
                        <h3>{product.name}</h3>
                      </div>
                      <p className="flex-none text-base font-medium">
                        {product.quantity} x {product.price} RON
                      </p>
                    </li>
                  ))}
                </ul>
              </PopoverPanel>
            </Popover>
          </div>
        </section>

        <OrderForm cart={cart} />
      </Container>
    </div>
  );
}
