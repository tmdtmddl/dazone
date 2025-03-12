import { useMemo, useRef, useState } from "react";

export const useS = () => {
  const [value, setValue] = useState("");
  const message = useMemo(() => {
    if (value.length === 0) {
      alert("값을 입력하세요.");
    }
    return null;
  }, [value]);
  const ref = useRef<HTMLInputElement>(null);
  const component = () => {
    return;
  };
  return { value, setValue, message, ref };
};
