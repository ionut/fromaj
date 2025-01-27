import React from "react";

const GridGallery = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-[repeat(3,_300px)] gap-4">
      <div className="bg-green col-span-1"></div>
      <div className="bg-green col-span-1"></div>
      <div className="bg-green col-span-2"></div>
      <div className="bg-green col-span-1"></div>
      <div className="bg-green col-span-2"></div>
      <div className="bg-green col-span-1"></div>
      <div className="bg-green col-span-1"></div>
      <div className="bg-green col-span-1"></div>
      <div className="bg-green col-span-1"></div>
      <div className="bg-green col-span-1"></div>
    </div>
  );
};

export default GridGallery;
