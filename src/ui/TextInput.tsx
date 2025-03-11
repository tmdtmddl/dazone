import React from "react";
import { twMerge } from "tailwind-merge";

export type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const Input = (props: Props) => {
  return <input {...props} className={twMerge("input", props?.className)} />;
};
