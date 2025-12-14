"use client";

import { Fragment, useState } from "react";
import {
  CloseButton,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import {
  Bars3Icon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "@/lib/hooks";
import { getTotalCartQuantity } from "@/lib/slice/cartSlice";
import useSWR from "swr";
import { getQuery } from "@/utils/query";
import { Products } from "@/utils/types";

const navigation = {
  categories: [
    {
      id: "platouri",
      name: "Platouri",
    },
  ],
  pages: [
    // { name: "Evenimente", href: "/evenimente" },
    // { name: "Rezervare", href: "/rezervare" },
    { name: "Despre noi", href: "/despre" },
  ],
};

export default function Navbar() {
  const { data, error, isLoading } = useSWR("/products?populate=*", getQuery);
  const products = data?.data as Products[];
  const featuredProductIds = new Set([1, 6]);

  const featuredProducts = products?.filter((product) =>
    featuredProductIds.has(product.id)
  );

  const [open, setOpen] = useState(false);
  const totalQuantity = useAppSelector(getTotalCartQuantity);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>failed to load</div>;
  return (
    <div className="bg-green">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-smoky-black-1/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-smoky-black-1 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-white"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* Links */}
            <TabGroup className="mt-2">
              <div className="border-b border-white">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-white data-[selected]:border-green data-[selected]:text-green data-[selected]:font-semibold"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((category) => (
                  <TabPanel
                    key={category.name}
                    className="space-y-10 px-4 pb-8 pt-10"
                  >
                    <div className="grid grid-cols-2 gap-x-2">
                      {featuredProducts.map((item) => (
                        <div
                          key={item.attributes.productName}
                          className="group relative text-sm"
                        >
                          <Image
                            alt={item.attributes.productName}
                            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.attributes.pictures.data[0].attributes.url}`}
                            width={360}
                            height={360}
                            className="aspect-square w-full rounded-lg object-cover group-hover:opacity-80"
                          />
                          <CloseButton
                            as={Link}
                            href={`/produse/${item.attributes.slug}`}
                            className="mt-6 block font-semibold text-white"
                          >
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 z-10"
                            />
                            {item.attributes.productName}
                          </CloseButton>
                          <p aria-hidden="true" className="mt-1 underline">
                            Shop now
                          </p>
                        </div>
                      ))}
                    </div>

                    <div key="Platouri">
                      <p
                        id="produse-platouri-heading-mobile"
                        className="font-medium text-white text-xl"
                      >
                        Platouri
                      </p>
                      <ul
                        role="list"
                        aria-labelledby="produse-platouri-heading-mobile"
                        className="mt-6 flex flex-col space-y-6"
                      >
                        {products?.map((item) => (
                          <li
                            key={item.attributes.productName}
                            className="flow-root"
                          >
                            <CloseButton
                              as={Link}
                              href={`/produse/${item.attributes.slug}`}
                              className="-m-2 block p-2 text-base font-medium text-white hover:text-white-alpha-80"
                            >
                              {item.attributes.productName}
                            </CloseButton>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <CloseButton
                    as={Link}
                    href={page.href}
                    className="-m-2 block p-2 text-base font-medium text-white hover:text-white-alpha-80"
                  >
                    {page.name}
                  </CloseButton>
                </div>
              ))}
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative bg-green">
        <nav aria-label="Top" className="container px-4 sm:px-6 lg:px-8">
          <div className="flex h-28 items-center justify-between lg:justify-start">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="relative rounded-md bg-white p-2 text-davys-grey lg:hidden"
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>

            {/* Logo */}
            <div className="flex lg:ml-0">
              <Link href="/">
                <span className="sr-only">Fromaj Logo</span>
                <Image
                  alt="Fromaj - Specialiști în platouri premium cu brânzeturi artizanale și catering pentru evenimente de lux în România"
                  width={256}
                  height={48}
                  priority
                  src="/images/logo.png"
                  className="h-12 w-64 aspect-auto"
                />
              </Link>
            </div>

            {/* Flyout menus */}

            <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
              <div className="flex h-full items-center space-x-8">
                {navigation.categories.map((category) => (
                  <Popover key={category.id} className="flex">
                    <div className="relative flex">
                      <PopoverButton className="relative z-0 flex items-center text-xl font-medium text-white transition-colors duration-200 ease-out hover:text-white-alpha-80 data-[open]:text-white-alpha-80">
                        {category.name}
                      </PopoverButton>
                    </div>

                    <PopoverPanel
                      transition
                      className="absolute z-10 inset-x-0 top-full text-white transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 top-1/2 bg-green shadow"
                      />

                      <div className="relative bg-green">
                        <div className="container px-8 border-t border-white-alpha-80">
                          <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                            <div className="col-start-2 grid grid-cols-2 gap-x-8">
                              {featuredProducts.map((item) => (
                                <div
                                  key={item.attributes.productName}
                                  className="group relative text-lg md:text-xl"
                                >
                                  <Image
                                    alt={item.attributes.productName}
                                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.attributes.pictures.data[0].attributes.url}`}
                                    width={720}
                                    height={720}
                                    className="aspect-square w-full rounded-lg object-cover group-hover:opacity-80"
                                  />

                                  <CloseButton
                                    as={Link}
                                    href={`/produse/${item.attributes.slug}`}
                                    className="mt-6 block font-medium text-white "
                                  >
                                    <span
                                      aria-hidden="true"
                                      className="absolute inset-0 z-10 font-bold"
                                    />
                                    {item.attributes.productName}
                                  </CloseButton>
                                  <p
                                    aria-hidden="true"
                                    className="mt-1 underline"
                                  >
                                    Shop now
                                  </p>
                                </div>
                              ))}
                            </div>
                            <div className="row-start-1 grid grid-cols-auto gap-x-8 gap-y-10 text-sm">
                              <div key="Platouri">
                                <p
                                  id="Platouri-heading"
                                  className="font-semibold text-white text-2xl"
                                >
                                  Platouri
                                </p>
                                <ul
                                  role="list"
                                  aria-labelledby="Platouri-heading"
                                  className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                >
                                  {products?.map((item) => (
                                    <li
                                      key={item.attributes.productName}
                                      className="flex"
                                    >
                                      <CloseButton
                                        as={Link}
                                        href={`/produse/${item.attributes.slug}`}
                                        className="text-xl text-white-alpha-80"
                                      >
                                        {item.attributes.productName}
                                      </CloseButton>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </PopoverPanel>
                  </Popover>
                ))}
                {navigation.pages.map((page) => (
                  <Link
                    key={page.name}
                    href={page.href}
                    className="flex items-center text-xl font-medium text-white hover:text-white-alpha-80"
                  >
                    {page.name}
                  </Link>
                ))}
              </div>
            </PopoverGroup>

            <div className="flex items-center lg:ml-auto">
              {/* Cart */}
              <div className="ml-4 flow-root lg:ml-6">
                <Link
                  href="/checkout"
                  className="group -m-2 flex items-center p-2"
                >
                  <ShoppingBagIcon
                    aria-hidden="true"
                    className="size-8 shrink-0 text-white group-hover:text-white-alpha-80"
                  />
                  <span className="ml-1 text-lg font-medium text-white group-hover:text-white-alpha-80">
                    {totalQuantity}
                  </span>
                  <span className="sr-only">produse in cos</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
