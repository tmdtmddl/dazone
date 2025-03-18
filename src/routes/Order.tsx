// import { useQuery } from "@tanstack/react-query";
// import React, { useEffect } from "react";
// import { db, FBCollection } from "../lib/firebase";
// import { AUTH } from "../contextApi";
// import Loading from "../shared/Loading";
// import pricfy from "../utils/pricfy";
// import { getFromNow } from "../utils/dayjs";

// const Order = () => {
//   const { user } = AUTH.use();
//   const { data, isPending, error } = useQuery({
//     queryKey: ["order"],
//     queryFn: async (): Promise<OrderProps[]> => {
//       if (!user) {
//         return [];
//       }
//       const ref = db
//         .collection(FBCollection.USERS)
//         .doc(user.uid)
//         .collection(FBCollection.ORDERS);
//       const snap = await ref.orderBy("createdAt", "desc").get();
//       const data = snap.docs.map((doc) => ({ ...(doc.data() as OrderProps) }));
//       return data ?? [];
//     },
//   });
//   if (isPending) {
//     return <Loading />;
//   }
//   if (error) {
//     return <>Error {error.message}</>;
//   }

//   // const onClick = () => {
//   //   dayjs.extend(relativeTime);
//   //   const a = dayjs("2025-03-17").format();
//   //   const now = dayjs().format("YYYY-M-DDTHH:mm:ssZ[Z]");
//   //   // console.log(dayjs(a).fromNow());
//   //   console.log(a);
//   // };

//   return (
//     <div>
//       {data?.length}
//       {data?.map((item) => (
//         <div key={item.orderId} className="border">
//           <h1>{item.orderName}</h1>
//           <p>{pricfy(item.amount.value)}</p>
//           <p>{getFromNow(item.createdAt)}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Order;

import useOrderQuery from "../lib/query.related/orderquery";
import { useQuery } from "@tanstack/react-query";
import Loading from "../shared/Loading";
import OrderItem from "./OrderItem";

const Order = (user: User) => {
  const { fetchFn, queryKey } = useOrderQuery(user.uid);

  const { data, isPending, error } = useQuery({ queryKey, queryFn: fetchFn });

  if (isPending) {
    return <Loading />;
  }

  if (error || !data) {
    return (
      <h1>
        {error.message} {error.name}
      </h1>
    );
  }

  return (
    <div>
      <ul className="flex flex-col gap-y-2.5">
        {data.map((order) => (
          <li key={order.orderId}>
            <OrderItem {...order} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Order;
