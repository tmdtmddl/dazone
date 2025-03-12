import { useCallback, useRef } from "react";
import { InputWrapper, InputWrapperProps } from "./Container";

import { Input, Props as InputProps } from "./TextInput";

interface UseTextInputProps extends InputWrapperProps {
  value: string | number;
  onChange: (value: string) => void;
  className?: string;
  inputProps?: InputProps;
}
const useTextInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const focus = useCallback(() => {
    setTimeout(() => ref.current?.focus(), 100);
  }, [ref]);

  const Component = useCallback(
    ({
      id,
      title,
      message,
      onChange,
      value,
      className,
      inputProps,
    }: UseTextInputProps) => {
      const WrapperPrpos = { id, title, message };
      return (
        <InputWrapper {...WrapperPrpos}>
          <Input
            {...inputProps}
            ref={ref}
            {...WrapperPrpos}
            onChange={(e) => onChange(e.target.value)}
            value={value}
            className={className}
          />
        </InputWrapper>
      );
    },
    [ref]
  );
  return { Component, focus, ref };
};

export default useTextInput;
