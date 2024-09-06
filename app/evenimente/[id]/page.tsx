import SingleEvent from "@/components/evenimente/SingleEvent";
import { notFound } from "next/navigation";
import Loader from "@/components/ui/Loader";
import { getQuery } from "@/utils/query";

export default async function EventPage({
  params,
}: {
  params: { id: string };
}) {
  const { error, data: event } = await getQuery(
    `/evenimentes?filters[id][$eq]=${params.id}&populate=*`
  );
  console.log(event);
  if (!event.length) {
    notFound();
  }
  return <SingleEvent event={event[0]} />;
}
