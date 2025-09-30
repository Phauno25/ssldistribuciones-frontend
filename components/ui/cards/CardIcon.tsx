import React from "react";
import { HTMLMotionProps, motion } from "motion/react";
import { IconName } from "@/types/types";
import Icon from "../icon/Icon";

type CardIconProps = {
  title?: string;
  description?: string;
  icon?: IconName;
  iconPosition?: "top" | "right" | "bottom" | "left";
} & HTMLMotionProps<"div">;

const CardIcon = ({
  title,
  description,
  icon = "Circle",
  iconPosition = "right",
  className,
  ...props
}: CardIconProps) => {
  const cardClassnames = [
    "flex items-center gap-4 p-4 rounded-lg max-w-sm border-gradient-main border-2",
    iconPosition === "bottom" && "flex-col",
    iconPosition === "right" && "flex-row",
    iconPosition === "top" && "flex-col-reverse",
    iconPosition === "left" && "flex-row-reverse",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const titleClassnames = [
    "text-xl font-bold text-primary-main w-full",
    iconPosition === "top" || iconPosition === "bottom"
      ? "text-center"
      : "text-left",
  ]
    .filter(Boolean)
    .join(" ");

    const subtitleClassnames = [
      "text-md text-[#ccc]",
      iconPosition === "top" || iconPosition === "bottom" ? "text-center" : "text-left",
    ]
      .filter(Boolean)
      .join(" ");

  return (
    <motion.div {...props} className={cardClassnames}>
      <div className="flex flex-col justify-between items-start gap-2">
        <h3 className={titleClassnames}>
          {title}
        </h3>
        <p className={subtitleClassnames}>{description}</p>
      </div>

      {icon && (
        <div className="bg-gradient-main from-surface-main to-surface-light rounded-full flex items-center justify-center p-2">
          <Icon name={icon} color="black" className="h-16 w-16" />
        </div>
      )}
    </motion.div>
  );
};

export default CardIcon;
