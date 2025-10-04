import React from "react";
import ContactFormSection from "./ui/ContactFormSection";
import ContactCard from "./ui/ContactCard";
import POSCard from "./ui/POSCard";
import { ContactInfoData } from "../types";

type ContactPageProps = {
  contactInfo?: ContactInfoData;
  pointsOfSales?: ContactInfoData[];
};

const ContactPage = ({ contactInfo, pointsOfSales }: ContactPageProps) => {
  return (
    <section className="w-full flex flex-col md:flex-row gap-16 md:gap-8 items-stretch border-surface-main border-2 border-t-0 py-8">
      <div className=" w-full md:flex-1 p-2 md:p-8 rounded-md flex flex-col justify-start items-center">
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

            <ContactFormSection />
          </div>
        </div>
      </div>
      <div className=" w-[2px] h-auto bg-surface-main hidden md:block" />
      <div className=" w-full md:flex-1 flex p-2 md:p-8 flex-col justify-start items-center gap-12">
        {contactInfo && <ContactCard contactInfo={contactInfo} />}
        {pointsOfSales && <POSCard pointsOfSales={pointsOfSales} />}
      </div>
    </section>
  );
};

export default ContactPage;
