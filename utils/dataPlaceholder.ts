import { Menu, Products, Slider } from "./types";

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

export const sliderItems: Slider[] = [
  {
    image: "/images/hero-slider-1.jpg",
    subtitle: "Fromaj",
    title: "Fromaj\nArtisan Cheese Boards",
    buttonText: "Comandă",
  },
  {
    image: "/images/hero-slider-2.jpg",
    subtitle: "Fromaj",
    title: "Cutii cu brânzeturi delicate\nși mezeluri alese",
    buttonText: "Comandă",
  },
  {
    image: "/images/hero-slider-3.jpg",
    subtitle: "Fromaj",
    title: "Corporate Catering\nEvenimente",
    buttonText: "Cere ofertă",
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
    image: "/images/menu-1.png",
    name: "Cutie Standard - 2 persoane",
    slug: "cutie-standard-mica",
    price: 109,
    quantity: 1,
    description:
      "Brânzeturi maturate (camembert, brânză de Brie, brânză cu mucegai albastru etc.), charcuterie(chorizo, prosciutto, salam uscat etc.), măsline, fructe proaspete de sezon, crackers și dulceață la alegere(smochine sau ceapă roșie). Recomandat pentru 4/5 persoane, gramaj 1kg.",
  },
  {
    id: 3,
    image: "/images/menu-1.png",
    name: "Cutie Standard - 4/5 persoane",
    slug: "cutie-standard-vegetariana",
    price: 189,
    quantity: 1,
    description:
      "Brânzeturi maturate (camembert, brânză de Brie, brânză cu mucegai albastru etc.), charcuterie(chorizo, prosciutto, salam uscat etc.), măsline, fructe proaspete de sezon, crackers și dulceață la alegere(smochine sau ceapă roșie). Recomandat pentru 4/5 persoane, gramaj 1kg.",
  },
];
