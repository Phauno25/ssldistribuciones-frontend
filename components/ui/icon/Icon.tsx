import { icons, LucideProps } from "lucide-react";
import { IconName } from "@/types/types";

export type IconProps = {
  name: IconName;
} & LucideProps;

const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = icons[name];

  if (!LucideIcon) {
    console.warn(`Icon "${name}" no existe en la libreria de iconos.`);
    return null;
  }

  return <LucideIcon strokeWidth={"0.5px"} {...props} />;
};

export default Icon;
