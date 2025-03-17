import { useContext, createContext } from "react";

export interface Props {
  cart: CartProps[];
  addToCart: (items: ProductProps[]) => Promise<PromiseResult>;
  removeAnItem: (id: string) => Promise<PromiseResult>;
  emptyCart: () => Promise<PromiseResult>;
  updateAnItem: (items: CartProps[]) => Promise<PromiseResult>;
  placeOrder: (items: CartProps[]) => Promise<PromiseResult>;

  isPending: boolean;
  error: null | Error;
}

export const initialstate: Props = {
  cart: [],
  addToCart: async () => ({}),
  removeAnItem: async () => ({}),
  emptyCart: async () => ({}),
  updateAnItem: async () => ({}),
  placeOrder: async () => ({}),
  isPending: true,
  error: null,
};

export const context = createContext(initialstate);
export const use = () => useContext(context);
