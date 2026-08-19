"use client";

import Image from "next/image";
import { useState } from "react";

const IMAGES = [
  { src: "/images/img1.png", alt: "Dargavs cafe view 1" },
  { src: "/images/img2.png", alt: "Dargavs cafe view 2" },
  { src: "/images/img3.png", alt: "Dargavs cafe view 3" },
];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);
  const lastIndex = IMAGES.length - 1;

  const goPrev = () => setCurrent((index) => (index === 0 ? lastIndex : index - 1));
  const goNext = () => setCurrent((index) => (index === lastIndex ? 0 : index + 1));

  return (
    <div className="relative h-[700px] w-full">
      <div className="relative h-full w-full overflow-hidden rounded-[20px]">
        {IMAGES.map((image, index) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            width={770}
            height={700}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            priority={index === 0}
          />
        ))}
      </div>

      <button
        type="button"
        aria-label="Previous image"
        onClick={goPrev}
        className="
          grid place-items-center w-[24px] h-[24px]
          absolute left-[-48px]
          top-1/2 -translate-y-1/2
          cursor-pointer transition 
          rounded-full transition-transform duration-150 ease-in-out hover:scale-102 hover:brightness-102 active:scale-98 active:brightness-98
          hover:bg-white"
      >
        <Image src="/arrow_left.svg" alt="Previous image" width={24} height={24} />
      </button>

      <button
        type="button"
        aria-label="Next image"
        onClick={goNext}
        className="
          grid place-items-center
          absolute right-[-48px]
          top-1/2 -translate-y-1/2
          cursor-pointer transition 
          rounded-full transition-transform duration-150 ease-in-out hover:scale-102 hover:brightness-102 active:scale-98 active:brightness-98
          hover:bg-white"
      >
        <Image src="/arrow_right.svg" alt="Next image" width={24} height={24} />
      </button>

      <div className="absolute bottom-[-30px] left-1/2 flex -translate-x-1/2 gap-2 ">
        {IMAGES.map((image, index) => (
          <button
            key={image.src}
            type="button"
            aria-label={`Show image ${index + 1}`}
            onClick={() => setCurrent(index)}
            className={`h-2.5 w-2.5 cursor-pointer rounded-full transition ${
              index === current ? "bg-[#8DB2FE]" : "bg-[rgba(195,221,255,.9)] hover:bg-[rgba(195,221,255,1)]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
