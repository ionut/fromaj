import { Menu, NutritionalValues, Products } from "./types";

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
  {
    name: "Contact",
    href: "/contact",
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

export const nutritionalValues: NutritionalValues[] = [
  {
    id: 1,
    productName: "Brie (100g)",
    values: {
      calorii: "334 calorii",
      grasimi: "28g grăsimi",
      carbo: "0.5g carbohidrați",
      proteine: "21g proteine",
      calciu: "184mg calciu",
      sodium: "629mg sodium",
      colesterol: "100mg colesterol",
    },
  },
  {
    id: 2,
    productName: "Cheddar (100g)",
    values: {
      calorii: "404 calorii",
      grasimi: "33g grăsimi",
      carbo: "3.1g carbohidrați",
      proteine: "23g proteine",
      calciu: "719mg calciu",
      sodium: "653mg sodium",
      colesterol: "99mg cholesterol",
    },
  },
  {
    id: 3,
    productName: "Gouda (100g)",
    values: {
      calorii: "356 calorii",
      grasimi: "27g grăsimi",
      carbo: "2.2g carbohidrați",
      proteine: "25g proteine",
      calciu: "700mg calciu",
      sodium: "819mg sodium",
      colesterol: "114mg cholesterol",
    },
  },
  {
    id: 4,
    productName: "Roquefort (100g)",
    values: {
      calorii: "369 calorii",
      grasimi: "31g grăsimi",
      carbo: "2g carbohidrați",
      proteine: "22g proteine",
      calciu: "662mg calciu",
      sodium: "1809mg sodium",
      colesterol: "90mg cholesterol",
    },
  },
];
