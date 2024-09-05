"use client";
import SingleEvent from "@/components/evenimente/SingleEvent";
import { notFound } from "next/navigation";
import { useQuery } from "@apollo/client";
import Loader from "@/components/ui/Loader";
import { GET_EVENT } from "@/utils/query";

export default function EventPage({ params }: { params: { id: string } }) {
  const { loading, error, data } = useQuery(GET_EVENT, {
    variables: { id: params.id },
  });
  if (error) return "Something went wrong";
  if (loading) return <Loader />;
  if (!data?.evenimente?.data) {
    notFound();
  }
  return <SingleEvent event={data?.evenimente?.data} />;
}
