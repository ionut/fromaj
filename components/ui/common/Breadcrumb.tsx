"use client";
import { HomeIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";

const Separator = () => (
  <svg
    fill="currentColor"
    viewBox="0 0 20 20"
    aria-hidden="true"
    className="size-8 shrink-0 text-eerie-black-1"
  >
    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
  </svg>
);

const BreadcrumbItem = ({ segment }: { segment: string }) => (
  <li>
    <div className="flex items-center">
      <Separator />
      <p className="ml-4 text-lg font-medium text-eerie-black-1 capitalize">
        {segment.split("-").join(" ")}
      </p>
    </div>
  </li>
);

export default function Breadcrumb() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  const segments = pathname.split("/").filter((segment) => segment !== "");

  return (
    <nav aria-label="Breadcrumb" className="flex container pt-8 lg:pt-16">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <Link
              href="/"
              className="text-eerie-black-1 hover:text-eerie-black-1/40"
            >
              <HomeIcon aria-hidden="true" className="size-8 shrink-0" />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
        {segments.map((segment, index) => (
          <BreadcrumbItem key={index} segment={segment} />
        ))}
      </ol>
    </nav>
  );
}
