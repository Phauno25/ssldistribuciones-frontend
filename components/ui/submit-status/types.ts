import { ReactNode } from "react";

export type SubmitStatusProps = {
  status: "success" | "error" | "loading";
  title: string;
  message: string;
  actionContent?: ReactNode;
};
