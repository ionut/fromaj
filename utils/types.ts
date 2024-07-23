export type Menu = {
  name: string;
  href: string;
};

export type Slider = {
  image: string;
  subtitle: string;
  title: string;
  buttonText: string;
};

export type Products = {
  id: number;
  image: string;
  name: string;
  slug: string;
  quantity: number;
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
