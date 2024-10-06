import Link from "next/link";
import React from "react";

const ImageCustom = ({
  children,
  href,
}: {
  children: JSX.Element;
  href: string;
}) => {
  return (
    <Link href={href} className="has-before hover:shine">
      <figure className="card-banner img-holder h-36">{children}</figure>
    </Link>
  );
};

export default ImageCustom;
