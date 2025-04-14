import { MenuProps } from "@/components/ui/menu/types";
import { LogoData } from "@/types/types";

export type FooterData = {
  id: string;
  title: string;
  logo: LogoData;
  menu: MenuProps;
  displayTitle?: boolean;
  mediaLinks?: { name: string; value: string }[];
};
