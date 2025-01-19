"use client";

import { Fragment, useState } from "react";
import {
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

const navigation = {
  categories: [
    {
      id: "produse",
      name: "Produse",
      featured: [
        {
          name: "Platou 7 persoane",
          href: "/produse/platou-7-persoane",
          imageSrc: "/images/cutii.jpg",
          imageAlt: "Platou 7 persoane",
        },
        {
          name: "Platou 4/5 persoane",
          href: "/produse/platou-5-persoane",
          imageSrc: "/images/cutii.jpg",
          imageAlt: "Platou 4/5 persoane",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Platouri",
          items: [
            { name: "Platou 10 persoane", href: "/produse/platou-10-persoane" },
            { name: "Platou 2 persoane", href: "/produse/platou-2-persoane" },
            { name: "Platou 4/5 persoane", href: "/produse/platou-4-persoane" },
            { name: "Platou 6/7 persoane", href: "/produse/platou-7-persoane" },
            {
              name: "Platou Vegetarian 4/5 persoane",
              href: "/produse/platou-vegetarian",
            },
          ],
        },
      ],
    },
    {
      id: "evenimente",
      name: "Evenimente",
      featured: [
        {
          name: "Botez",
          href: "/evenimente/botez",
          imageSrc:
            "https://tailwindui.com/plus/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Nunta",
          href: "/evenimente/nunta",
          imageSrc:
            "https://tailwindui.com/plus/img/ecommerce-images/category-page-02-image-card-06.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "categorii",
          name: "Categorii",
          items: [
            { name: "Botez", href: "/evenimente/botez" },
            { name: "Nunta", href: "/evenimente/nunta" },
            { name: "Picnic", href: "/evenimente/picnic" },
            { name: "Onomastica", href: "/evenimente/onomastica" },
            { name: "Atelier", href: "/evenimente/atelier" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Rezervare", href: "/rezervare" },
    { name: "Despre noi", href: "/despre" },
  ],
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const totalQuantity = useAppSelector(getTotalCartQuantity);
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
                      {category.featured.map((item) => (
                        <div key={item.name} className="group relative text-sm">
                          <Image
                            alt={item.imageAlt}
                            src={item.imageSrc}
                            width={140}
                            height={140}
                            className="aspect-square w-full rounded-lg object-cover group-hover:opacity-80"
                          />
                          <Link
                            href={item.href}
                            className="mt-6 block font-semibold text-white"
                          >
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 z-10"
                            />
                            {item.name}
                          </Link>
                          <p aria-hidden="true" className="mt-1 underline">
                            Shop now
                          </p>
                        </div>
                      ))}
                    </div>
                    {category.sections.map((section) => (
                      <div key={section.name}>
                        <p
                          id={`${category.id}-${section.id}-heading-mobile`}
                          className="font-medium text-white text-xl"
                        >
                          {section.name}
                        </p>
                        <ul
                          role="list"
                          aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                          className="mt-6 flex flex-col space-y-6"
                        >
                          {section.items.map((item) => (
                            <li key={item.name} className="flow-root">
                              <Link
                                href={item.href}
                                className="-m-2 block p-2 text-base font-medium text-white hover:text-white-alpha-80"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <Link
                    href={page.href}
                    className="-m-2 block p-2 text-base font-medium text-white hover:text-white-alpha-80"
                  >
                    {page.name}
                  </Link>
                </div>
              ))}
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative bg-green">
        <p className="flex h-14 items-center justify-center bg-davys-grey px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Banner customizabil pentru reduceri/vacante/sarbatori etc
        </p>

        <nav aria-label="Top" className="container px-4 sm:px-6 lg:px-8">
          <div className="flex h-28 items-center">
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
            <div className="ml-4 flex lg:ml-0">
              <Link href="/">
                <span className="sr-only">Fromaj</span>
                <Image
                  alt="Fromaj - Artisan Cheese Boards"
                  width={256}
                  height={48}
                  priority={true}
                  src="/images/logo.png"
                  className="h-12 w-auto"
                />
              </Link>
            </div>

            {/* Flyout menus */}
            <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
              <div className="flex h-full items-center space-x-8">
                {navigation.categories.map((category) => (
                  <Popover key={category.name} className="flex">
                    <div className="relative flex">
                      <PopoverButton className="relative z-10 flex items-center text-lg font-medium text-white transition-colors duration-200 ease-out hover:text-white-alpha-80 data-[open]:text-white-alpha-80">
                        {category.name}
                      </PopoverButton>
                    </div>

                    <PopoverPanel
                      transition
                      className="absolute inset-x-0 top-full text-white transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
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
                              {category.featured.map((item) => (
                                <div
                                  key={item.name}
                                  className="group relative text-base md:text-lg"
                                >
                                  <Image
                                    alt={item.imageAlt}
                                    src={item.imageSrc}
                                    width={344}
                                    height={344}
                                    className="aspect-square w-full rounded-lg object-cover group-hover:opacity-80"
                                  />
                                  <Link
                                    href={item.href}
                                    className="mt-6 block font-medium text-white "
                                  >
                                    <span
                                      aria-hidden="true"
                                      className="absolute inset-0 z-10 font-bold"
                                    />
                                    {item.name}
                                  </Link>
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
                              {category.sections.map((section) => (
                                <div key={section.name}>
                                  <p
                                    id={`${section.name}-heading`}
                                    className="font-medium text-white text-2xl"
                                  >
                                    {section.name}
                                  </p>
                                  <ul
                                    role="list"
                                    aria-labelledby={`${section.name}-heading`}
                                    className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                  >
                                    {section.items.map((item) => (
                                      <li key={item.name} className="flex">
                                        <Link
                                          href={item.href}
                                          className="text-lg text-white-alpha-80"
                                        >
                                          {item.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
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
                    className="flex items-center text-lg font-medium text-white hover:text-white-alpha-80"
                  >
                    {page.name}
                  </Link>
                ))}
              </div>
            </PopoverGroup>

            <div className="ml-auto flex items-center">
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
