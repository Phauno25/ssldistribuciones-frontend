import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import * as SVGCromponent from "../../../public/WhatsApp.svg";

const FAB = () => {
  const [wpHover, setWpHover] = useState(false);

  return (
    <motion.button
      onHoverStart={() => setWpHover(true)}
      onHoverEnd={() => setWpHover(false)}
      animate={{ width: "auto" }}
      onClick={() =>
        window.open(
          `https://wa.me/5491123849505?text=${encodeURIComponent(
            "Hola! Quisiera recibir asesoramiento."
          )}`,
          "_blank"
        )
      }
      className="fixed z-50 bottom-4 right-4 flex flex-nowrap items-center text-nowrap justify-start font-semibold border-2 overflow-hidden border-primary-main hover:bg-primary-dark hover:text-default rounded-full p-2 min-w-16 gap-4"
    >
      <Image
        src={SVGCromponent}
        alt="Whatsapp Logo"
        width={24}
        height={24}
        className="w-16 h-16 p-2 object-cover"
      />
      <AnimatePresence>
        {wpHover && (
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: "fit-content" }}
            exit={{ width: 0, transition: { ease: "easeIn" } }}
          >
            Chatea con nosotros
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default FAB;
