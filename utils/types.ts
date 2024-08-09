export type Menu = {
  name: string;
  href: string;
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

type values = {
  calorii: string;
  grasimi: string;
  carbo: string;
  proteine: string;
  calciu: string;
  sodium: string;
  colesterol: string;
};

export type NutritionalValues = {
  id: number;
  productName: string;
  values: values;
};
