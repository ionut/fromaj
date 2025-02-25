export type Menu = {
  name: string;
  href: string;
};

export type Products = {
  id: number;
  pictures: any;
  attributes: any;
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

export interface Cart {
  id: number;
  name: string;
  image: string;
  quantity: number;
  price: number;
  totalPrice: number;
  slug: string;
}

export type InputProps = {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
