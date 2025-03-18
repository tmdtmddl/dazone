import { create } from "zustand";
import { products } from "../../lib/dummy";

export interface Props {
  products: ProductProps[];
  keyword: string | null;
  onChangeKeyword: PropsFunc<string>;
}

export const store = create<Props>(() => ({
  products,
  keyword: null,
  onChangeKeyword: (newKeyword) =>
    set((perv) => ({ ...prev, keyword: newKeyword })),
}));
