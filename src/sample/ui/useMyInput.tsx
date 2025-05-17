import { useCallback, useRef } from "react";

// import { TextInput } from ".";

interface MyInputProps {
  focus: () => void;
  onChange: (value: string) => void;
  value: string | number;
}

const useMyInput = () => {
  const ref = useRef<HTMLInputElement>(null);

  const focus = useCallback(() => {
    setTimeout(() => {
      ref.current?.focus();
    }, 100);
  }, [ref]);

  const Component = useCallback(
    ({ onChange, value }: MyInputProps) => {
      return (
        <input
          ref={ref}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      );
    },
    [ref]
  );

  return { Component, focus, ref };
};

export default useMyInput;
