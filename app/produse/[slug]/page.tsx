import SingleProduct from "@/components/produse/SingleProduct";
import { products } from "@/utils/dataPlaceholder";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  const productsList = products;

  return productsList.map((product) => ({
    slug: product.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const product = products.filter((product) => product.slug === slug);

  if (product.length === 0) {
    notFound();
  }
  return <SingleProduct product={product[0]} />;
}
