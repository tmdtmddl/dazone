import { useCallback, useRef } from "react";
import { InputWrapper, InputWrapperProps } from "./Container";
import { Input, Props as InputProps } from "./TextInput";

// Define the props for the custom hook
export interface UseTextInputProps extends InputWrapperProps {
  value: string | number;
  onChange: (value: string) => void;
  className?: string;
  inputProps?: InputProps;
}

const useTextInput = () => {
  const ref = useRef<HTMLInputElement>(null);

  // Focus function: directly focus the input
  const focus = useCallback(() => {
    ref.current?.focus();
  }, []);

  // Component using useCallback to avoid unnecessary re-renders
  const Component = useCallback(
    ({
      id,
      title,
      message,
      value,
      onChange,
      className,
      inputProps, // Destructure inputProps here
    }: UseTextInputProps) => {
      const wrapperProps = { id, title, message };

      return (
        <InputWrapper {...wrapperProps}>
          <Input
            {...inputProps}
            ref={ref}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={className}
          />
        </InputWrapper>
      );
    },
    []
  );

  return {
    ref,
    Component,
    focus,
  };
};

export default useTextInput;
