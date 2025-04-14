"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { loadImgUrl } from "@/utils/functions";
import { ImageGalleryProps } from "./types";

const spring = {
  type: "tween",
  damping: 50,
  stiffness: 300,
};

const ImgGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  // Creamos un array de indices para cada imagen qe haya 
  const initialOrder = images?.map((_, index) => index) ?? [];
  const [order, setOrder] = useState(initialOrder);

  // Trackeamos el indice seleccionado
  const [selectedIndex, setSelectedIndex] = useState<number | null>(
    initialOrder.length > 0 ? initialOrder[0] : null
  );

  // 3) Movemos el index seleccionado al frente (swapeamos)
  const swapIndex = (currentOrder: number[], clickedIndex: number) => {
    const newArr = [...currentOrder];
    const idx = newArr.indexOf(clickedIndex);
    if (idx > 0) {
      [newArr[0], newArr[idx]] = [newArr[idx], newArr[0]];
    }
    setOrder(newArr);
    setSelectedIndex(clickedIndex);
  };

  return (
    <motion.div className="grid grid-cols-3 gap-2" layout>
      {order.map((imageIndex, _) => {
        const isSelected = imageIndex === selectedIndex;
        const image = images?.[imageIndex];

        if (!image) return null;

        return (
          <motion.button
            key={image.id}
            layout
            transition={{ spring }}
            onClick={(e) => {
              e.preventDefault();
              swapIndex(order, imageIndex);
            }}
            onKeyDown={(e) => {
              e.preventDefault();
              if (e.key === "Enter" || e.key === " ") {
                swapIndex(order, imageIndex);
              }
            }}
            className="relative cursor-pointer border-2 border-surface-main rounded-md overflow-hidden"
            style={{
              gridColumnStart: isSelected ? 1 : "auto",
              gridColumnEnd: isSelected ? 4 : "auto",
            }}
          >
            <motion.img
              layout
              className="w-full h-auto object-contain"
              src={loadImgUrl(image.url)}
              alt={image.alternativeText ?? ""}
            />
          </motion.button>
        );
      })}
    </motion.div>
  );
};

export default ImgGallery;
