import SingleEvent from "@/components/evenimente/SingleEvent";
import { events } from "@/utils/dataPlaceholder";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return events.map((event) => ({
    id: event.id.toString(),
  }));
}

export default function ProductPage({ params }: { params: { id: number } }) {
  const { id } = params;

  const event = events.filter((item) => item.id == id);
  if (event.length === 0) {
    notFound();
  }
  return <SingleEvent event={event[0]} />;
}
