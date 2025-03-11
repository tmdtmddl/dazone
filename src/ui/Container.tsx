import React from "react";
import { twMerge } from "tailwind-merge";
import { TextInput } from ".";

export type Divprops = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
export const Col = (props: Divprops) => {
  return <div {...props} className={twMerge("div col", props?.className)} />;
};

export const Row = (props: Divprops) => {
  return <div {...props} className={twMerge("div", props?.className)} />;
};

export interface InputWrapperProps {
  id: string;
  title: string;
  children: () => React.ReactNode;
  message?: string;
}
export const InputWrapper = ({
  id,
  title,
  children,
  message,
}: InputWrapperProps) => {
  return (
    <Col>
      <TextInput.Label htmlFor={id}>{title}</TextInput.Label>
    </Col>
  );
};
