"use client";
import { FormPropTypes } from "@/types/types";
import React from "react";
import { Input } from "../../../components/ui/input";
import TextArea from "../../../components/ui/text-area/TextArea";
import { Button } from "../../../components/ui/button";
import { useForm } from "react-hook-form";
import { FormContactoValues } from "../types/types";

const FormContacto: React.FC<FormPropTypes<FormContactoValues>> = ({
  onSubmit,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormContactoValues>();

  const submitForm = (e: FormContactoValues): void => {
    if (onSubmit) {
      onSubmit(e);
    }
  };

  return (
    <form
      action="#"
      className="space-y-8 pt-4"
      onSubmit={handleSubmit(submitForm)}
    >
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="w-full md:w-1/2">
          <Input
            label="Nombre *"
            placeholder="Ingresá tu Nombre"
            {...register("nombre", {
              required: {
                value: true,
                message: "Este campo es requerido",
              },
            })}
            status={errors.nombre !== undefined ? "error" : undefined}
            helperText={errors.nombre?.message}
          />
        </div>
        <div className="w-full md:w-1/2">
          <Input
            label="Apellido *"
            placeholder="Ingresá tu Apellido"
            {...register("apellido", {
              required: {
                value: true,
                message: "Este campo es requerido",
              },
            })}
            status={errors.apellido !== undefined ? "error" : undefined}
            helperText={errors.apellido?.message}
          />
        </div>
      </div>
      <div className=" flex flex-col md:flex-row justify-between gap-4">
        <div className="w-full md:w-1/2">
          <Input
            label="Teléfono *"
            placeholder="Ingresá un teléfono"
            {...register("telefono", {
              required: {
                value: true,
                message: "Este campo es requerido",
              },
            })}
            status={errors.telefono !== undefined ? "error" : undefined}
            helperText={errors.telefono?.message}
          />
        </div>
        <div className="w-full md:w-1/2">
          <Input
            label="Email *"
            placeholder="Ingresá tu mail"
            {...register("email", {
              required: {
                value: true,
                message: "Este campo es requerido",
              },
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Ingrese un email válido",
              },
            })}
            status={errors.email !== undefined ? "error" : undefined}
            helperText={errors.email?.message}
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <TextArea
          label="Mensaje"
          placeholder="Hola, quisiera que me contacten..."
          {...register("mensaje")}
          status={errors.mensaje !== undefined ? "error" : undefined}
          helperText={errors.mensaje?.message}
        />
      </div>
      <div className="flex justify-end">
        <Button variant="gradient" type="submit">
          Enviar
        </Button>
      </div>
    </form>
  );
};

export default FormContacto;
