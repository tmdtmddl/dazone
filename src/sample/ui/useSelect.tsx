import { useRef, useCallback } from "react";
import { InputWrapper, InputWrapperProps } from "./Container";

interface UseSelectProps extends InputWrapperProps {
  selectProps?: React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  >;
  value: string | number;
  onSelect: (vale: string) => void;
  placeholder: string;
  options: string[];
  className: string;
}
const useSelect = () => {
  const ref = useRef<HTMLInputElement>(null);
  const focus = useCallback(() => {
    setTimeout(() => ref.current?.focus(), 100);
  }, [ref]);
  const show = useCallback(() => {
    setTimeout(() => ref.current?.showPicker(), 100);
  }, [ref]);
  const hide = useCallback(() => {
    setTimeout(() => ref.current?.blur(), 100);
  }, [ref]);
  const Component = useCallback(
    ({
      className,
      id,
      onSelect,
      options,
      title,
      placeholder,
      value,
      message,
      selectProps,
      children,
    }: UseSelectProps) => {
      const WrapperPrpos = { id, title, message };
      return (
        <InputWrapper {...WrapperPrpos}>
          <select
            {...selectProps}
            {...WrapperPrpos}
            onChange={(e) => onSelect(e.target.value)}
            className={className}
            value={value}
          >
            <option>{placeholder}</option>
            {options.map((o) => (
              <option value={o} key={o}>
                {o}
              </option>
            ))}
          </select>
        </InputWrapper>
      );
    },
    [ref]
  );
  return { Component, show, focus, hide };
};

export default useSelect;
