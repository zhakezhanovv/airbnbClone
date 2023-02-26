import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] xxl:h-[700px] ">
      <Image
        src="https://links.papareact.com/0fm"
        fill
        alt="No image"
        style={{ objectFit: "cover" }}
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfrect.</p>
        <button className="text-purple-500 bg-white px-10 py-4 rounded-full shadow-md font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I am flexible
        </button>
      </div>
    </div>
  );
}
