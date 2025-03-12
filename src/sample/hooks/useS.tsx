import { useCallback, useMemo, useRef, useState } from "react";

const useS = () => {
  const [value, setValue] = useState("");

  const message = useMemo(() => {
    if (value.length === 0) {
      return "값 입력";
    }
    return null;
  }, [value]);
  const ref = useRef<HTMLInputElement>(null);

  const Component = useCallback(() => {
    return (
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        ref={ref}
      />
    );
  }, [value, ref]);

  return { value, setValue, message, ref, Component };
};

export default useS;
