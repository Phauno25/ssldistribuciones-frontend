"use client";
import FormContacto from "@/app/contacto/components/FormContacto";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon/Icon";
import SubmitStatus from "@/components/ui/submit-status/SubmitStatus";
import { postData } from "@/services/services";
import Link from "next/link";
import React, { useState } from "react";
import { FormContactoValues } from "../types/types";

type FormStatus = "loading" | "ready" | "success" | "error";

const RenderForm = (
  status: FormStatus,
  submitFn: (e: FormContactoValues) => Promise<void>
) => {
  if (status === "success") {
    return (
      <SubmitStatus
        title="¡Gracias por contactarnos!"
        message="Nos pondremos en contacto con vos a la brevedad."
        status="success"
        actionContent={
          <Link
            className="text-primary-extralight underline underline-offset-2 text-sm"
            href={"/"}
          >
            Volver al inicio
          </Link>
        }
      />
    );
  }
  if (status === "error") {
    return (
      <SubmitStatus
        title="No pudimos enviar el fomulario."
        message="Reintenta nuevamente en unos minutos."
        status="success"
        actionContent={
          <Button className="bg-secondary-dark" onClick={() => submitFn}>
            Reintentar
          </Button>
        }
      />
    );
  }
  if (status === "loading") {
    return (
      <SubmitStatus
        title="Enviando formulario"
        message="Aguarda unos instantes..."
        status="loading"
      />
    );
  }
  return <FormContacto onSubmit={submitFn} />;
};

const Page = () => {
  const [status, setStatus] = useState<FormStatus>("ready");
  const handleSubmit = async (e: FormContactoValues) => {
    setStatus("loading");
    const response = await postData("form-submissions-contactos", e);
    if (response.status === 500) {
      setStatus("error");
      console.error(response);
    }
    if (response.status === 200) {
      setStatus("success");
    }
  };

  return (
    <section className=" w-full flex flex-col md:flex-row gap-8 border-surface-main border-2 border-t-0 bg-surface-dark md:h-[100vh]">
      <div className=" w-full md:w-1/2 px-2 md:px-8 py-2 rounded-md flex flex-col justify-center items-center border-surface-main border-b-2 md:border-b-0 md:border-r-2">
        <div className="rounded-lg px-2 py-8 md:px-8 w-11/12 md:w-5/6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-center text-primary-main">
              Contáctenos
            </h1>
            <p className="text-center text-neutral-300">
              Necesita asesoramiento? Quiere consultar por un plan de compra? Ha
              tenido algun inconveniente? Envienos un mensaje y nos pondremos en
              contacto con usted a la brevedad.
            </p>

            {RenderForm(status, handleSubmit)}
          </div>
        </div>
      </div>

      <div className=" w-full md:w-1/2 flex py-4 flex-col justify-center items-center gap-12">
        <div className="w-full p-4 md:p-0 md:w-3/5 h-80 rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full bg-gradient-main p-2 rounded-lg"
            title="map"
            src="https://maps.google.com/maps?width=100%25&amp;height=100%&amp;hl=en&amp;q=Estomba%20148%20Sarandi%20Avellanea+(SSL%20Distribuciones)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
        <div className="border-0 p-4 md:border-2 rounded-lg border-surface-light flex flex-col gap-4">
          <div className="flex flex-row items-center gap-4">
            <Icon
              name="Factory"
              size={38}
              className="text-primary-main bg-surface-main p-2 rounded-full"
            />
            |<p className="text-md"> Estomba 123 - Sarandi - Avellaneda </p>
          </div>
          <div className="flex flex-row items-center gap-4">
            <Icon
              name="Phone"
              size={38}
              className="text-primary-main bg-surface-main p-2 rounded-full"
            />
            |<p className="text-md"> +54 9 110303456 </p>
          </div>
          <div className="flex flex-row items-center gap-4">
            <Icon
              name="Mail"
              size={32}
              className="text-primary-main bg-surface-main p-2 rounded-full"
            />
            |<p className="text-md"> ssldistribuciones@gmail.com </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
