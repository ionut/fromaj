"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Products } from "@/utils/types";
import Image from "next/image";
import { useAppSelector } from "@/lib/hooks";
import { getCurrentQuantityById } from "@/lib/slice/cartSlice";

import ProductActionAddToCard from "./ProductActionAddToCard";

export default function SingleProduct({ product }: { product: Products }) {
  const { id } = product;
  const {
    productName: name,
    price,
    weight,
    description,
    pictures,
    personNumber,
    slug,
  } = product.attributes;
  const details = [
    {
      name: "Caracteristici",
      items: [
        `Greutate ${weight} kg`,
        "Alergeni: Lactate, Gluten, Fructe cu coajă lemnoasă, Muștar, Sulfiți. Produsul poate conține urme de alți alergeni, fiind preparat într-un spațiu unde sunt procesate și alte ingrediente. Termen de valabilitatate: 2 zile de la dată producției. A se pastra la temperatura de 2-8°C",
        "Poate fi personalizat la cerea clientului",
      ],
    },
    {
      name: "Livrare",
      items: [
        "Iași și zona metropolitană",
        "Comanda se face cu minim 24 de ore înainte",
      ],
    },
    {
      name: "Retur",
      items: ["Nu se acceptă returul produselor alimentare"],
    },
  ];
  const currentQuantity = useAppSelector(getCurrentQuantityById(id));

  return (
    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
      {/* Image gallery */}
      <TabGroup className="flex flex-col-reverse">
        {/* Image selector */}
        <div className="mx-auto mt-6 w-full max-w-2xl block lg:max-w-none">
          <TabList className="grid grid-cols-4 gap-6">
            {pictures.data.map((image: any) => (
              <Tab
                key={image.id}
                className="group relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-white hover:bg-white-alpha-80 focus:outline-none focus:ring focus:ring-green focus:ring-offset-4"
              >
                <span className="sr-only">{image.name}</span>
                <span className="absolute inset-0 overflow-hidden rounded-md">
                  <Image
                    alt={`Miniatură ${name} - Platou Fromaj #${image.id}`}
                    width={720}
                    height={720}
                    priority
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image.attributes.url}`}
                    className="size-full object-cover"
                  />
                </span>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent ring-offset-2 group-data-[selected]:ring-green"
                />
              </Tab>
            ))}
          </TabList>
        </div>

        <TabPanels>
          {pictures.data.map(
            (image: any) => (
              console.log(image),
              (
                <TabPanel key={image.id}>
                  <Image
                    alt={`${name} premium - Imagine detaliată cu brânzeturi fine și mezeluri artizanale Fromaj pentru evenimente și catering de lux`}
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image.attributes.url}`}
                    width={720}
                    height={720}
                    priority
                    className="aspect-square w-full object-cover sm:rounded-lg"
                  />
                </TabPanel>
              )
            )
          )}
        </TabPanels>
      </TabGroup>

      {/* Product info */}
      <div className="mt-10 sm:mt-16 px-0 lg:mt-0">
        <h1 className="text-3xl font-bold tracking-tight text-white">{name}</h1>

        <div className="mt-3">
          <h2 className="sr-only">Informatii produs</h2>
          <p className="text-3xl tracking-tight text-white">{price} RON</p>
        </div>

        <div className="mt-6">
          <h3 className="sr-only">Descriere</h3>

          <div
            dangerouslySetInnerHTML={{ __html: description }}
            className="space-y-6 text-lg text-white"
          />
        </div>

        <div className="mt-2 lg:mt-6">
          <ProductActionAddToCard item={product} />
        </div>

        <div aria-labelledby="details-heading" className="mt-6">
          <h2 id="details-heading" className="sr-only">
            Additional details
          </h2>

          <div className="divide-y divide-gray-200 border-t">
            {details.map((detail) => (
              <Disclosure key={detail.name} as="div">
                <h3>
                  <DisclosureButton className="group relative flex w-full items-center justify-between py-6 text-left">
                    <span className="text-lg font-medium text-white group-data-[open]:text-white-alpha-80">
                      {detail.name}
                    </span>
                    <span className="ml-6 flex items-center">
                      <PlusIcon
                        aria-hidden="true"
                        className="block size-6 text-white group-hover:text-white-alpha-80 group-data-[open]:hidden"
                      />
                      <MinusIcon
                        aria-hidden="true"
                        className="hidden size-6 text-white group-hover:text-white-alpha-80 group-data-[open]:block group-data-[open]:text-white-alpha-80"
                      />
                    </span>
                  </DisclosureButton>
                </h3>
                <DisclosurePanel className="pb-6">
                  <ul
                    role="list"
                    className="list-disc space-y-1 pl-5 text-base text-white marker:text-white"
                  >
                    {detail.items.map((item) => (
                      <li key={item} className="pl-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
