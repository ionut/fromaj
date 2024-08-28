export type Menu = {
  name: string;
  href: string;
};

export type Products = {
  id: number;
  image: string;
  otherImages: string[];
  name: string;
  slug: string;
  persoane: string;
  weight: number;
  price: number;
  description: string;
};

export type Cart = {
  id: number;
  name: string;
  quantity: number;
  price: number;
  totalPrice: number;
};

export type Events = {
  id: number;
  location: string;
  personNumber: number;
  type: string;
  pictures: string[];
  date: string;
};
