import SingleProduct from "@/components/produse/SingleProduct";
import Container from "@/components/ui/common/Container";
import { getQuery } from "@/utils/query";
import { notFound } from "next/navigation";

export default async function ProductPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const { data: product } = await getQuery(
    `/products?filters[slug][$eq]=${params.slug}&populate=*`
  );

  const { data: relatedProducts } = await getQuery(
    `/products?filters[slug][$ne]=${params.slug}&populate=*`
  );
  if (!product.length || !product) {
    notFound();
  }
  return (
    <Container className="space-y-8">
      <SingleProduct product={product[0]} />
    </Container>
  );
}
