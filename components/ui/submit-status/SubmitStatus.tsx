import React from "react";
import Icon from "../icon/Icon";
import Spinner from "../spinner/Spinner";
import clsx from "clsx";

export type SubmitStatusProps = {
  status: "success" | "error" | "loading";
  title: string;
  message: string;
  actionContent?: React.ReactNode;
};

const MotionImage = ({ status }: { status: string }) => {
  if (status === "success") {
    return (
      <Icon
        name="Check"
        width={64}
        height={64}
        className="bg-success-main rounded-full p-2"
      />
    );
  }
  if (status === "error") {
    return (
      <Icon
        name="CircleAlert"
        width={64}
        height={64}
        className="bg-error-main rounded-full p-2"
      />
    );
  }
  return (
    <Spinner
      size="large"
      fill="red"
      color="blue"
      className="text-surface-main fill-surface-light"
    />
  );
};

const SubmitStatus: React.FC<SubmitStatusProps> = ({
  status,
  title,
  message,
  actionContent,
}) => {
  const statusColorText = {
    success: "text-success-main",
    error: "text-error-main",
    loading: "text-white",
  };
  return (
    <div className="p-8 border-surface-light border-2 rounded-lg flex items-center justify-center flex-col gap-4">
      <MotionImage status={status} />
      <h2 className={clsx("text-2xl font-semibold", statusColorText[status])}>
        {title}
      </h2>
      <p>{message}</p>
      {actionContent}
    </div>
  );
};

export default SubmitStatus;
