import React from "react";
import { ContactInfoData } from "../../types";
import { Icon } from "@/components/ui";

type ContactCardProps = {
  contactInfo?: ContactInfoData;
};

const ContactCard = ({ contactInfo }: ContactCardProps) => {
  return (
    <div className="border-surface-main border rounded w-full p-6">
      <p className="text-xl">Información de contacto:</p>
      <div className="mt-8">
        {contactInfo?.addresses && contactInfo.addresses.length > 0 && (
          <div className="flex gap-2 items-center p-2">
            <Icon
              name="MapPin"
              className="text-primary-main"
              strokeWidth={"2px"}
              size={20}
            />
            <span className="text-sm text-neutral-300">
              {contactInfo?.addresses
                .map((address) => address.value)
                .join(" | ")}
            </span>
          </div>
        )}
        {contactInfo?.phones && contactInfo.phones.length > 0 && (
          <div className="flex gap-2 items-center p-2">
            <Icon
              name="Phone"
              className="text-primary-main"
              strokeWidth={"2px"}
              size={20}
            />
            <span className="text-sm text-neutral-300">
              {contactInfo?.phones.map((phone) => phone.value).join(" | ")}
            </span>
          </div>
        )}
        {contactInfo?.emails && contactInfo.emails.length > 0 && (
          <div className="flex gap-2 items-center p-2">
            <Icon
              name="Mail"
              className="text-primary-main"
              strokeWidth={"2px"}
              size={20}
            />
            <span className="text-sm text-neutral-300">
              {contactInfo?.emails.map((email) => email.value).join(" | ")}
            </span>
          </div>
        )}
        {contactInfo?.opening_hours && contactInfo.opening_hours.length > 0 && (
          <div className="flex gap-2 items-center p-2">
            <Icon
              name="Clock"
              className="text-primary-main"
              strokeWidth={"2px"}
              size={20}
            />
            <span className="text-sm text-neutral-300">
              {contactInfo?.opening_hours.map((hour) => hour.value).join(" | ")}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactCard;
