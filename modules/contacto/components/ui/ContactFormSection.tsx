"use client";
import { SubmitStatus, Button } from "@/components/ui";
import { FormContactoValues, FormStatus } from "../../types";
import Link from "next/link";
import ContactForm, { FormContactoRef } from "./ContactForm";
import { useState, useRef } from "react";
import { postData } from "../../services/postData";

const ContactFormSection = () => {
  const [status, setStatus] = useState<FormStatus>("ready");
  const formRef = useRef<FormContactoRef>(null);

  const handleSubmit = async (formData: FormContactoValues) => {
    setStatus("loading");
    try {
      const response = await postData("form-submissions-contactos", formData);
      if (response.status === 500) {
        setStatus("error");
      } else if (response.status === 200) {
        setStatus("success");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const handleRetry = () => {
    if (formRef.current) {
      // Opción 1: Volver al formulario para que el usuario revise y reenvíe
      setStatus("ready");
    }
  };

  const handleAutoRetry = () => {
    if (formRef.current) {
      // Opción 2: Reintento automático con los mismos datos
      formRef.current.submitForm();
    }
  };

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
        title="No pudimos enviar el formulario."
        message="Reintenta nuevamente en unos minutos."
        status="error"
        actionContent={
          <div className="flex gap-4 flex-col sm:flex-row">
            <Button
              variant="outlined"
              onClick={handleRetry}
              className="border-secondary-dark text-secondary-dark"
            >
              Revisar formulario
            </Button>
            <Button className="bg-secondary-dark" onClick={handleAutoRetry}>
              Reintentar envío
            </Button>
          </div>
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
  return <ContactForm ref={formRef} onSubmit={handleSubmit} />;
};

export default ContactFormSection;
