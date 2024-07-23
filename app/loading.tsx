import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="preload">
      <div className="circle"></div>
      <Image
        src="/images/logo.png"
        className="text"
        width="160"
        height="50"
        alt="Fomaj - Preload"
      />
    </div>
  );
};

export default Loading;
