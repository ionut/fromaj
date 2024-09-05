"use client";
import SingleProduct from "@/components/produse/SingleProduct";
import Loader from "@/components/ui/Loader";
import { GET_PRODUCT } from "@/utils/query";
import { useQuery } from "@apollo/client";
import { notFound } from "next/navigation";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { slug: params.slug },
  });
  if (error) return "Something went wrong";
  if (loading) return <Loader />;

  if (!data?.products?.data) {
    notFound();
  }
  return <SingleProduct product={data?.products?.data[0]} />;
}
