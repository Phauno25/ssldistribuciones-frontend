import { Icon } from "@/components/ui";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="w-full h-[60vh] flex flex-col items-center justify-center gap-8 pb-4">
      <Icon name="ZapOff" size={100} className="text-primary-main" />
      <div className="flex w-1/2 flex-col items-center text-center">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-lg text-gray-200">
          No hemos encontrado la página que estás buscando.
        </p>
        <Link href="/" className="text-lg text-secondary-main">
          Volver a la página de inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
