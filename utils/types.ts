export type Menu = {
  name: string;
  href: string;
};

export type Products = {
  id: number;
  image: any;
  attributes: any;
  otherImages: string[];
  productName: string;
  slug: string;
  personNumber: number;
  weight: number;
  price: number;
  description: string;
};

export type Events = {
  id: number;
  location: string;
  personNumber: number;
  type: string;
  attributes: any;
  date: string;
};

export type Cart = {
  id: number;
  name: string;
  quantity: number;
  price: number;
  totalPrice: number;
};
