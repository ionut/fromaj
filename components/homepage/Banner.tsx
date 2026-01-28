import { getQuery } from "@/utils/query";

export default async function Banner() {
  const { data, error } = await getQuery("/banner");

  if (error || !data) return null;

  return (
    <p className="flex h-14 items-center justify-center bg-davys-grey px-4 text-base font-medium text-white sm:px-6 lg:px-8">
      {data.attributes?.text}
    </p>
  );
}
