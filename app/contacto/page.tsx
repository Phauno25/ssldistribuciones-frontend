import ContactPage from "@/modules/contacto/components/ContactPage";
import { getContactInfo } from "@/modules/contacto/services/getContactInfo";
import { getPointsOfSales } from "@/modules/contacto/services/getPointsOfSales";

export default async function page() {
  const contactInfo = await getContactInfo();
  const pointsOfSales = await getPointsOfSales();

  return <ContactPage contactInfo={contactInfo} pointsOfSales={pointsOfSales} />;
}
