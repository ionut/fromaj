// "use client";
// import Image from "next/image";
// import React, { useState } from "react";
// import { Cart, Products } from "@/utils/types";
// import { useAppDispatch, useAppSelector } from "@/lib/hooks";
// import { addItem, getCurrentQuantityById } from "../../lib/slice/cartSlice";
// import UpdateItemQuantity from "../cart/UpdateItemQuantity";
// import DeleteItem from "../cart/DeleteItem";
// import RelatedProduct from "./RelatedProduct";
// const SingleProduct = ({
//   product,
//   relatedProducts,
// }: {
//   product: Products;
//   relatedProducts: Products[];
// }) => {
//   const dispatch = useAppDispatch();
//   const { id } = product;
//   const {
//     productName: name,
//     price,
//     weight,
//     description,
//     pictures,
//     personNumber,
//     slug,
//   } = product.attributes;

//   const [mainImage, setMainImage] = useState(pictures.data[0].attributes.url);
//   const currentQuantity = useAppSelector(getCurrentQuantityById(id));
//   const isInCart = currentQuantity > 0;

//   const handleClick = (id: number) => {
//     setMainImage(pictures.data[id].attributes.url);
//   };

//   function handleAddToCart() {
//     const newItem: Cart = {
//       id: id,
//       image: pictures?.data[0]?.attributes?.url,
//       name: name,
//       quantity: 1,
//       price: price,
//       totalPrice: price * 1,
//       slug: slug,
//     };
//     dispatch(addItem(newItem));
//   }

//   return (
//     <>
//       <section className="container">
//         <div className="single-type">
//           <div className="single-type-block_col">
//             <Image
//               src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${mainImage}`}
//               width={285}
//               height={336}
//               loading="lazy"
//               alt={name}
//               className="img-cover"
//             />

//             <div className="row gap-10 overflow-scroll">
//               {pictures?.data?.map((picture: any, index: number) => {
//                 return (
//                   <Image
//                     key={index}
//                     src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${picture.attributes.url}`}
//                     width={100}
//                     height={100}
//                     alt={name}
//                     className="other-images"
//                     onClick={() => handleClick(index)}
//                   />
//                 );
//               })}
//             </div>
//           </div>
//           <div className="single-type-block_col">
//             <h2 className="headline-1 section-title">
//               <span>{name}</span>
//             </h2>
//             <div className="product-attributes">
//               <div className="product-attribute">
//                 <p className="title-2">Pret:</p>
//                 <p className="title-2 product-attribute_detail">{price} RON</p>
//               </div>
//               <div className="product-attribute">
//                 <p className="title-2">Greutate:</p>
//                 <p className="title-2 product-attribute_detail">{weight} kg</p>
//               </div>
//               <div className="product-attribute">
//                 <p className="title-2">Disponibilitate:</p>
//                 <p className="title-2 product-attribute_detail">In stoc!</p>
//               </div>
//               <div className="product-attribute">
//                 <p className="title-2">Recomandare:</p>
//                 <p className="title-2 product-attribute_detail">
//                   {personNumber} persoane
//                 </p>
//               </div>
//             </div>

//             <p className="section-text">{description}</p>
//             <div className="row justify-start">
//               <div className="col-2 row gap-20">
//                 {isInCart && (
//                   <>
//                     <UpdateItemQuantity
//                       productId={id}
//                       currentQuantity={currentQuantity}
//                     />
//                     <DeleteItem productId={id} />
//                   </>
//                 )}
//               </div>
//               <div className="col-10">
//                 {!isInCart && (
//                   <button
//                     type="button"
//                     className="btn-add-to-cart"
//                     onClick={handleAddToCart}
//                   >
//                     Adaugă în coș
//                   </button>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="section menu">
//         <div className="container">
//           <p className="section-subtitle text-center label-2">
//             Selecție Specială
//           </p>

//           <h2 className="headline-1 section-title text-center">
//             Produse Recomandate
//           </h2>
//           <div className="related-product_grid">
//             {relatedProducts.map((relatedProduct: Products) => {
//               return (
//                 <RelatedProduct
//                   key={relatedProduct.attributes.productName}
//                   relatedProduct={relatedProduct}
//                 />
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default SingleProduct;

"use client";

import { useState } from "react";
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
import Container from "../ui/common/Container";
import { Cart, Products } from "@/utils/types";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addItem, getCurrentQuantityById } from "@/lib/slice/cartSlice";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
import DeleteItem from "../cart/DeleteItem";

export default function SingleProduct({ product }: { product: Products }) {
  const dispatch = useAppDispatch();
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
        `Recomandat pentru maxim ${personNumber} persoane`,
        "Poate ceva despre alimentele folosite",
        "Alergii",
        "Customizabil",
      ],
    },
    {
      name: "Livrare",
      items: [
        "Iasi si zona metropolitana",
        "Poate ceva despre interval orar",
        "Comanda se face cu min 24 inainte",
      ],
    },
    {
      name: "Retur",
      items: ["Nu se accepta retur"],
    },
  ];
  const currentQuantity = useAppSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;
  function handleAddToCart() {
    const newItem: Cart = {
      id: id,
      image: pictures?.data[0]?.attributes?.url,
      name: name,
      quantity: 1,
      price: price,
      totalPrice: price * 1,
      slug: slug,
    };
    dispatch(addItem(newItem));
  }
  return (
    <Container>
      <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
        {/* Image gallery */}
        <TabGroup className="flex flex-col-reverse">
          {/* Image selector */}
          <div className="mx-auto mt-6 w-full max-w-2xl block lg:max-w-none">
            <TabList className="grid grid-cols-4 gap-6">
              {pictures.data.map((image) => (
                <Tab
                  key={image.id}
                  className="group relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-white hover:bg-white-alpha-80 focus:outline-none focus:ring focus:ring-green focus:ring-offset-4"
                >
                  <span className="sr-only">{image.name}</span>
                  <span className="absolute inset-0 overflow-hidden rounded-md">
                    <Image
                      alt={name}
                      width={285}
                      height={336}
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
            {pictures.data.map((image) => (
              <TabPanel key={image.id}>
                <Image
                  alt="Platouri"
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image.attributes.url}`}
                  width={464}
                  height={464}
                  className="aspect-square w-full object-cover sm:rounded-lg"
                />
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>

        {/* Product info */}
        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            {name}
          </h1>

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

          <div className="mt-6">
            <div className="mt-10 flex">
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
            </div>
          </div>

          <section aria-labelledby="details-heading" className="mt-12">
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
          </section>
        </div>
      </div>
    </Container>
  );
}
