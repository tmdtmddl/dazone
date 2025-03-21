import { useContext, createContext } from "react";

export interface Context {
  user: User | null;
  initialized: boolean;
  isPending: boolean;
  signin: (email: string, password: string) => Promise<PromiseResult>; //! database
  signout: () => Promise<PromiseResult>;
  signup: (newUser: User, password: string) => Promise<PromiseResult>;

  updateUser: (target: keyof User, value: any) => void;
}

export const initialState: Context = {
  user: null,
  initialized: false,
  isPending: true,
  signin: async () => ({}),
  signout: async () => ({}),
  signup: async () => ({}),
  updateUser: () => {},
};

export const context = createContext(initialState);

export const use = () => useContext(context);
