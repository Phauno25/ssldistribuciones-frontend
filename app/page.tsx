"use client";
import { useState } from "react";
import HeroSection from "../components/layout/hero/HeroContentAside";
import ComponentLoader from "../components/ComponentLoader";
import HeroSkeleton from "@/components/layout/hero/HeroSkeleton";
import Image from "next/image";
import * as SVGCromponent from "../public/WhatsApp.svg";
import { AnimatePresence, motion } from "motion/react";
import { useFetch } from "@/hooks";
import { HomePageProps } from "@/types/types";

export default function Home() {
  const [wpHover, setWpHover] = useState(false);

  const { data, loading } = useFetch<HomePageProps>(
    "home-page?populate[hero][populate]=*&populate[body][populate]=*",
    "ui"
  );
  return !loading && data ? (
    <>
      <HeroSection
        title={data.hero.title}
        description={data.hero.description}
        orientation="left"
        actionButtons={data.hero.actionButtons}
        image={data.hero.image}
      />
      <ComponentLoader data={data.body} />

      <motion.button
        onHoverStart={() => setWpHover(true)}
        onHoverEnd={() => setWpHover(false)}
        animate={{ width: "auto" }}
        onClick={() => window.open("https://wa.me/5491123849505")}
        className="fixed z-50 bottom-4 right-4 flex flex-nowrap items-center text-nowrap justify-start font-semibold bg-surface-light border-2 overflow-hidden border-primary-main hover:bg-primary-dark hover:text-default rounded-full p-2 min-w-16 gap-4"
      >
        <Image
          unoptimized
          src={SVGCromponent}
          alt="Whatsapp Logo"
          width={32}
          height={32}
          className="w-16 h-16 object-cover"
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
    </>
  ) : (
    <HeroSkeleton />
  );
}
