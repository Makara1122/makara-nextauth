import React from "react";
import '@/app/globals.css'
import Image from "next/image";
export default function ImageComponent() {
  return (
    <Image className="w-full h-500 object-cover md:w-48 md:h-full"
    src="https://i.pinimg.com/564x/c2/3d/79/c23d79d6061a7a0920b8f6fb4f6788a0.jpg"
    alt="Picture of the author"
    width={500}
    height={500}
  />
  );
}