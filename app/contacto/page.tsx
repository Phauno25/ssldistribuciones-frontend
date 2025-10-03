import ContactPage from "@/modules/contacto/components/ContactPage";
import { getContactInfo } from "@/modules/contacto/services/getContactInfo";
import { getPointsOfSales } from "@/modules/contacto/services/getPointsOfSales";

export const metadata = {
  title: "Contacto",
  description: "Información de contacto y puntos de venta.",
  alternates: { canonical: "/contacto" },
  openGraph: {
    title: "Contacto · SSL Distribuciones",
    description: "Información de contacto y puntos de venta.",
    url: "/contacto",
  },
};

export default async function page() {
  const contactInfo = await getContactInfo();
  const pointsOfSales = await getPointsOfSales();

  return (
    <ContactPage contactInfo={contactInfo} pointsOfSales={pointsOfSales} />
  );
}
