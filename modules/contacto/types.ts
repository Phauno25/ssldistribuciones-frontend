export type FormContactoValues = {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  mensaje: string;
};
export type FormStatus = "loading" | "ready" | "success" | "error";

type ContactInfoItem = {
  id: number;
  name: string;
  value: string;
};

export type ContactInfoData = {
  id: 2;
  documentId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  addresses: ContactInfoItem[];
  phones: ContactInfoItem[];
  opening_hours: ContactInfoItem[];
  emails: ContactInfoItem[];
};
