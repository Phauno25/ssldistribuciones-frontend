import { icons } from "lucide-react";
import { IconProps } from "./types";

const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = icons[name];

  if (!LucideIcon) {
    console.warn(`Icon "${name}" no existe en la libreria de iconos.`);
    return null;
  }

  return <LucideIcon {...props} />;
};

export default Icon;
