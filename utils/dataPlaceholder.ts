import { Menu, Products } from "./types";

export const menuLinks: Menu[] = [
  {
    name: "Acasă",
    href: "/",
  },
  {
    name: "Produse",
    href: "/produse",
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
    id: 1,
    image: "/images/menu-1.png",
    name: "Cutie Standard - 4/5 persoane",
    slug: "cutie-standard-mare",
    price: 189,
    quantity: 1,
    description:
      "Brânzeturi maturate (camembert, brânză de Brie, brânză cu mucegai albastru etc.), charcuterie(chorizo, prosciutto, salam uscat etc.), măsline, fructe proaspete de sezon, crackers și dulceață la alegere(smochine sau ceapă roșie). Recomandat pentru 4/5 persoane, gramaj 1kg.",
  },
  {
    id: 2,
    image: "/images/menu-2.png",
    name: "Cutie Standard - 2 persoane",
    slug: "cutie-standard-mica",
    price: 109,
    quantity: 1,
    description:
      "Brânzeturi maturate (camembert, brânză cu mucegai albastru etc.), charcuterie(chorizo, prosciutto, salam uscat etc.), măsline, fructe proaspete de sezon, crackers. Recomandat pentru două persoane, gramaj 600gr.",
  },
  {
    id: 3,
    image: "/images/menu-3.png",
    name: "Cutie Vegetariană",
    slug: "cutie-standard-vegetariana",
    price: 189,
    quantity: 1,
    description:
      "Brânzeturi maturate (camembert, brânză cu mucegai albastru, gouda etc.), măsline, fructe proaspete de sezon, crackers, mini-croissant. Gramaj 1kg.",
  },
];
