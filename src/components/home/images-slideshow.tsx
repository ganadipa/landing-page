"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ImageSlideshowProps = {
  images: string[];
  onImageClick?: (index: number) => void;
};

export const ImageSlideshow = ({
  images,
  onImageClick,
}: ImageSlideshowProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full aspect-square overflow-hidden" content="">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out ${
            index === currentImage ? "opacity-100 z-50" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Luxury ${index + 1}`}
            width={400}
            height={400}
            className="w-full h-full cursor-pointer"
            onClick={() => onImageClick?.(index)}
          />
        </div>
      ))}
    </div>
  );
};
