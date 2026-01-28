import SingleEvent from "@/components/evenimente/SingleEvent";
import { notFound } from "next/navigation";
import { getQuery } from "@/utils/query";

export default async function EventPage(
  props: {
    params: Promise<{ id: string }>;
  }
) {
  const params = await props.params;
  const { data: event, error } = await getQuery(
    `/evenimentes?filters[id][$eq]=${params.id}&populate=*`
  );

  if (error || !event?.length) {
    notFound();
  }

  return <SingleEvent event={event[0]} />;
}
