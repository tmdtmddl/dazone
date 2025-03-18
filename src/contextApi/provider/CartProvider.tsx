// import { useCallback, PropsWithChildren, useMemo } from "react";
// import { AUTH, CART } from "../context";
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { db, FBCollection } from "../../lib/firebase";

// const queryKey = ["cart"];
// const CartProvider = ({ children }: PropsWithChildren) => {
//   const { user } = AUTH.use();
//   const ref = useMemo(
//     () =>
//       db
//         .collection(FBCollection.USERS)
//         .doc(user?.uid)
//         .collection(FBCollection.ORDERS),
//     [user]
//   );
//   const { data, isPending, error } = useQuery({
//     queryKey: ["order"],
//     queryFn: async (): Promise<CartProps[]> => {
//       if (!user) {
//         return [];
//       }

//       const snap = await ref.orderBy("createdAt", "desc").get();
//       const data = snap.docs.map((doc) => ({ ...(doc.data() as CartProps) }));
//       return data ?? [];
//     },
//   });

//   const queryCliet = useQueryClient();
//   const invalidate = useCallback(() => {
//     queryCliet.invalidateQueries({ queryKey });
//   }, [queryCliet]);

//   const mutation = useMutation({
//     mutationFn: async ({
//       action,
//       items,
//     }: {
//       action: keyof CART.Props;
//       items: (CartProps | ProductProps)[];
//     }): Promise<PromiseResult> => {
//       try {
//         switch (action) {
//           case "addToCart":
//             await ref.doc(items[0].id).set(items[0]);
//             return { success: true };
//           case "removeAnItem":
//             await ref.doc(items[0].id).delete();
//             return { success: true };
//           case "updateAnItem":
//             await ref.doc(items[0].id).update(items[0]);
//             return { success: true };

//           case "emptyCart":
//             ref.onSnapshot((snap) => {
//               snap.docChanges().map(async ({ doc }) => {
//                 const data = { ...doc.data() };
//                 await ref.doc(doc.id).delete();
//                 console.log("delected", doc.id);
//               });
//             });
//             return { success: true };

//           default:
//             return { success: false, message: "함수가 아닙니다." };
//         }
//       } catch (error: any) {
//         return { message: error.message };
//       }
//     },
//     onSuccess: ({ message, success }) => {
//       if (!success && message) {
//         return alert(message);
//       }
//       queryCliet.invalidateQueries({ queryKey });
//     },
//     onError: (error) => {
//       alert(error.message);
//     },
//   });

//   const addToCart = useCallback(
//     async (items: ProductProps[]): Promise<PromiseResult> => {
//       const res = await mutation.mutateAsync({ items, action: "addToCart" });
//       return res;
//     },
//     [mutation]
//   );

//   const removeAnItem = useCallback(
//     async (items: ProductProps[]): Promise<PromiseResult> => {
//       const res = await mutation.mutateAsync({
//         items,
//         action: " removeAnItem",
//       });
//       return res;
//     },
//     [mutation]
//   );
//   const updateAnItem = useCallback(
//     async (items: ProductProps[]): Promise<PromiseResult> => {
//       const res = await mutation.mutateAsync({
//         items,
//         action: "updateAnItem",
//       });
//       return res;
//     },
//     [mutation]
//   );
//   const placeOrder = useCallback(
//     async (items: ProductProps[]): Promise<PromiseResult> => {
//       const res = await mutation.mutateAsync({ items, action: "placeOrder" });
//       return res;
//     },
//     [mutation]
//   );

//   const emptyCart = useCallback(
//     async (items: ProductProps[]): Promise<PromiseResult> => {
//       const res = await mutation.mutateAsync({ items, action: "emptyCart" });
//       return res;
//     },
//     [mutation]
//   );

//   return (
//     <CART.context.Provider
//       value={{
//         error,
//         isPending,
//         cart: data ?? [],
//         mutation, // mutation을 context에 추가
//         addToCart,
//         emptyCart,
//         placeOrder,
//         removeAnItem,
//         updateAnItem,
//       }}
//     >
//       {children}
//     </CART.context.Provider>
//   );
// };

// export default CartProvider;

import { PropsWithChildren, useCallback } from "react";
import { AUTH, CART } from "../context";
import useCartQuery from "../../lib/query.related/cart.query";
import { useQuery } from "@tanstack/react-query";

const CartProvider = ({ children }: PropsWithChildren) => {
  const { user } = AUTH.use();

  const { updateFn, queryKey, fetchFn } = useCartQuery(user?.uid as string);
  const { data, isPending, error } = useQuery({ queryFn: fetchFn, queryKey });

  const addToCart = useCallback(
    async (item: ProductProps): Promise<PromiseResult> => {
      try {
        const foundItem = data?.find((cartItem) => cartItem.id === item.id);

        await updateFn(
          "CREATE",
          foundItem
            ? { ...foundItem, quan: foundItem.quan + 1 }
            : { ...item, quan: 1 }
        );

        return { success: true };
      } catch (error: any) {
        return { message: error.message };
      }
    },
    [updateFn, data]
  );

  const updateAnItem = useCallback(
    async (item: ProductProps): Promise<PromiseResult> => {
      try {
        await updateFn("UPDATE", item);

        return { success: true };
      } catch (error: any) {
        return { message: error.message };
      }
    },
    [updateFn]
  );

  const removeAnItem = useCallback(
    async (item: CartProps): Promise<PromiseResult> => {
      try {
        await updateFn("DELETE", item);

        return { success: true };
      } catch (error: any) {
        return { message: error.message };
      }
    },
    [updateFn]
  );

  const emptyCart = useCallback(async (): Promise<PromiseResult> => {
    try {
      data?.map(async (item) => {
        await updateFn("DELETE", item);
      });

      return { success: true };
    } catch (error: any) {
      return { message: error.message };
    }
  }, [updateFn, data]);
  return (
    <CART.context.Provider
      value={{
        addToCart,
        cart: data ?? [],
        emptyCart,
        error,
        isPending,
        removeAnItem,
        updateAnItem,
      }}
    >
      {children}
    </CART.context.Provider>
  );
};

export default CartProvider;
