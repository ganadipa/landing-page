"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

type ImageSlideshowProps = {
  images: string[];
  onImageClick?: (index: number) => void;
  className?: string;
};

export const ImageSlideshow = ({
  images,
  onImageClick,
  className,
}: ImageSlideshowProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  // Change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className={cn("relative w-full overflow-hidden", className)}
      content=""
    >
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out ${
            index === currentImage ? "opacity-100 z-10" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Luxury ${index + 1}`}
            width={400}
            height={400}
            className={cn("w-full h-full object-cover", {
              "cursor-pointer": Boolean(onImageClick),
            })}
            onClick={() => onImageClick?.(index)}
          />
        </div>
      ))}
    </div>
  );
};
