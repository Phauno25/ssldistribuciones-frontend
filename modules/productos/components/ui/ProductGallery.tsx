"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui";
import { loadImgUrl } from "@/utils/functions";
import { ImageType } from "@/types/types";
import Image from "next/image";

type ProductGalleryProps = {
  images?: ImageType[];
};

export function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  const nextImage = () => {
    images && setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    images &&
      setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    images && (
      <div className="space-y-4 w-full">
        {/* Main Image */}
        <div className="relative group">
          <div className=" overflow-hidden rounded-2xl border border-surface-main">
            <Image
              src={loadImgUrl(images[selectedImage].url)}
              alt={`${"productName"} - Vista ${selectedImage + 1}`}
              className="w-full h-96 md:h-[400px] object-cover"
            />
          </div>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <Button
                variant="outlined"
                size="xs"
                className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 backdrop-blur-sm"
                onClick={prevImage}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outlined"
                size="xs"
                className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 backdrop-blur-sm"
                onClick={nextImage}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </>
          )}

          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 bg-surface-dark/80 backdrop-blur-sm rounded-full px-3 py-1 text-sm">
            {selectedImage + 1} / {images.length}
          </div>
        </div>

        {/* Thumbnail Gallery */}
        {images.length > 1 && (
          <div className="grid grid-cols-4 gap-3">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                  selectedImage === index
                    ? "ring-2 ring-primary cyber-glow"
                    : "hover:ring-1 hover:ring-primary/50"
                }`}
              >
                <Image
                  src={loadImgUrl(image.url)}
                  alt={`${"productName"} - Miniatura ${index + 1}`}
                  className="w-full h-20 object-cover"
                />
                {selectedImage === index && (
                  <div className="absolute inset-0 bg-primary/20" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    )
  );
}
