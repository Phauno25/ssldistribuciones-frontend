import { MenuProps } from "@/components/ui/menu/types";
import { LogoData } from "@/types/types";

export type NavBarData = {
  id: string;
  title: string;
  logo: LogoData;
  menu: MenuProps;
  displayTitle?: boolean;
};
