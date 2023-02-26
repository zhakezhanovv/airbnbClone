import Image from "next/image";
import React from "react";

export default function SmallCard(props: any) {
  const { img, location, distance } = props;
  return <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-150 ease-out">
    <div className="relative h-16 w-16"><Image className="rounded-lg" src={img} alt='No iamge' fill/></div>
    <div className="">
      <h2>{location}</h2>
      <h3 className="text-gray-500">{distance}</h3>
    </div>
  </div>;
}
