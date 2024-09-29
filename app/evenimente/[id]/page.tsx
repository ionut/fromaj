import SingleEvent from "@/components/evenimente/SingleEvent";
import { notFound } from "next/navigation";
import { getQuery } from "@/utils/query";

export default async function EventPage({
  params,
}: {
  params: { id: string };
}) {
  const { data: event } = await getQuery(
    `/evenimentes?filters[id][$eq]=${params.id}&populate=*`
  );
  if (!event.length) {
    notFound();
  }
  return <SingleEvent event={event[0]} />;
}
