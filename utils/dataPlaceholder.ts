import { Events, Menu, Products } from "./types";

export const menuLinks: Menu[] = [
  {
    name: "Acasă",
    href: "/",
  },
  {
    name: "Evenimente",
    href: "/evenimente",
  },
  {
    name: "Despre noi",
    href: "/despre",
  },
];

export const products: Products[] = [
  {
    id: 11,
    image: "/images/menu-1.png",
    otherImages: [
      "/images/menu-1.png",
      "/images/menu-2.png",
      "/images/menu-3.png",
    ],
    name: "Cutie Standard",
    slug: "cutie-standard-mare",
    price: 189,
    weight: 1,
    persoane: "4/5 persoane",
    description:
      "Brânzeturi maturate (camembert, brânză de Brie, brânză cu mucegai albastru etc.), charcuterie(chorizo, prosciutto, salam uscat etc.), măsline, fructe proaspete de sezon, crackers și dulceață la alegere(smochine sau ceapă roșie).",
  },
  {
    id: 12,
    image: "/images/menu-2.png",
    otherImages: [
      "/images/menu-1.png",
      "/images/menu-2.png",
      "/images/menu-3.png",
    ],
    name: "Cutie Mică",
    slug: "cutie-standard-mica",
    price: 109,
    weight: 0.6,
    persoane: "2 persoane",
    description:
      "Brânzeturi maturate (camembert, brânză cu mucegai albastru etc.), charcuterie(chorizo, prosciutto, salam uscat etc.), măsline, fructe proaspete de sezon, crackers.",
  },
  {
    id: 13,
    image: "/images/menu-3.png",
    otherImages: [
      "/images/menu-1.png",
      "/images/menu-2.png",
      "/images/menu-3.png",
    ],
    name: "Cutie Vegetariană",
    slug: "cutie-standard-vegetariana",
    price: 189,
    weight: 1,
    persoane: "4/5 persoane",
    description:
      "Brânzeturi maturate (camembert, brânză cu mucegai albastru, gouda etc.), măsline, fructe proaspete de sezon, crackers, mini-croissant.",
  },
];

export const events: Events[] = [
  {
    id: 1,
    location: "Nunta capitol",
    personNumber: 50,
    type: "Nunta",
    pictures: [
      "/images/cheese-bar.jpg",
      "/images/cheese-bar.jpg",
      "/images/cheese-bar.jpg",
      "/images/cheese-bar.jpg",
      "/images/cheese-bar.jpg",
      "/images/cheese-bar.jpg",
      "/images/cheese-bar.jpg",
    ],
    date: "01/01/2021",
  },
  {
    id: 2,
    location: "Picnic",
    personNumber: 50,
    type: "Nunta",
    pictures: ["/images/cheese-bar.jpg"],
    date: "01/01/2021",
  },
  {
    id: 3,
    location: "lorem ipsum",
    personNumber: 50,
    type: "Nunta",
    pictures: ["/images/cheese-bar.jpg"],
    date: "01/01/2021",
  },
  {
    id: 4,
    location: "lorem ipsum",
    personNumber: 50,
    type: "Nunta",
    pictures: ["/images/cheese-bar.jpg"],
    date: "01/01/2021",
  },
];
