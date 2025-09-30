import React from "react";
import { ContactInfoData } from "../../types";
import { Icon } from "@/components/ui";

type POSCardProps = {
  pointsOfSales?: ContactInfoData[];
};

const POSCard = ({ pointsOfSales }: POSCardProps) => {
  return (
    <div className="border-surface-main border rounded w-full p-6">
      <p className="text-xl">Puntos de venta:</p>
      {pointsOfSales ? (
        <div className="mt-2">
          {pointsOfSales?.map((pos) => {
            return (
              <div className="mt-6" key={pos.id}>
                <p className="text-md text-primary-main">{pos.name}</p>
                <div className="mt-2">
                  {pos.addresses && pos.addresses.length > 0 && (
                    <div className="flex gap-2 items-center p-2">
                      <Icon
                        name="MapPin"
                        className="text-primary-main"
                        strokeWidth={"2px"}
                        size={20}
                      />
                      <span className="text-sm text-neutral-300">
                        {pos.addresses
                          .map((address) => address.value)
                          .join(" | ")}
                      </span>
                    </div>
                  )}
                  {pos.phones && pos.phones.length > 0 && (
                    <div className="flex gap-2 items-center p-2">
                      <Icon
                        name="Phone"
                        className="text-primary-main"
                        strokeWidth={"2px"}
                        size={20}
                      />
                      <span className="text-sm text-neutral-300">
                        {pos.phones.map((phone) => phone.value).join(" | ")}
                      </span>
                    </div>
                  )}

                  {pos.emails && pos.emails.length > 0 && (
                    <div className="flex gap-2 items-center p-2">
                      <Icon
                        name="Mail"
                        className="text-primary-main"
                        strokeWidth={"2px"}
                        size={20}
                      />
                      <span className="text-sm text-neutral-300">
                        {pos.emails.map((email) => email.value).join(" | ")}
                      </span>
                    </div>
                  )}

                  {pos.opening_hours && pos.opening_hours.length > 0 && (
                    <div className="flex gap-2 items-center p-2">
                      <Icon
                        name="Clock"
                        className="text-primary-main"
                        strokeWidth={"2px"}
                        size={20}
                      />
                      <span className="text-sm text-neutral-300">
                        {pos.opening_hours.join(" | ")}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="mt-8">
          <p className="text-sm text-neutral-300">
            Por el momento no tenemos otros puntos de venta disponibles para
            mostrar.
          </p>
        </div>
      )}
    </div>
  );
};

export default POSCard;
