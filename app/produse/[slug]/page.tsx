import SingleProduct from "@/components/ui/product/SingleProduct";
import Container from "@/components/ui/common/Container";
import { getQuery } from "@/utils/query";
import { notFound } from "next/navigation";

async function getProduct(slug: string) {
  const { data, error } = await getQuery(
    `/products?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`,
  );
  if (error) return null;
  return data?.[0] || null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const routeParams = (await params).slug;
  const product = await getProduct(routeParams);
  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product does not exist",
    };
  }

  return {
    title: product.attributes.productName,
    description: product.attributes.description,
    openGraph: {
      title: product.attributes.productName,
      description: product.attributes.description,
      images: [
        {
          url: product.attributes.pictures.data[0].attributes.url
            ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${product.attributes.pictures.data[0].attributes.url}`
            : "/default-product-image.jpg",
          width: 800,
          height: 600,
          alt: product.attributes.productName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.attributes.productName,
      description: product.attributes.description,
      images: product.attributes.pictures.data[0].attributes.url
        ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${product.attributes.pictures.data[0].attributes.url}`
        : "/default-product-image.jpg",
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const routeParams = (await params).slug;
  const product = await getProduct(routeParams);

  if (!product) {
    notFound();
  }
  return (
    <Container className="space-y-8">
      <SingleProduct product={product} />
      {/* <ProductReviews /> */}
    </Container>
  );
}
