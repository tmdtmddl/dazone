import { useContext, createContext } from "react";

export interface Props {
  cart: CartProps[];
  addToCart: (item: ProductProps[]) => Promise<PromiseResult>;
  removeAnItem: (item: CartProps) => Promise<PromiseResult>;
  emptyCart: () => Promise<PromiseResult>;
  updateAnItem: (item: CartProps[]) => Promise<PromiseResult>;

  isPending: boolean;
  error: null | Error;
}

export const initialstate: Props = {
  cart: [],
  addToCart: async () => ({}),
  removeAnItem: async () => ({}),
  emptyCart: async () => ({}),
  updateAnItem: async () => ({}),

  isPending: true,
  error: null,
};

export const context = createContext(initialstate);
export const use = () => useContext(context);
