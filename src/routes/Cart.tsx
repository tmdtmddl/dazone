import {
  useState,
  useMemo,
  useCallback,
  useEffect,
  useTransition,
} from "react";
import CartItem from "./CartItem";
import pricfy from "../utils/pricfy";
import { loadTossPayments } from "@tosspayments/tosspayments-sdk";
import { v4 } from "uuid";
import { AUTH, CART } from "../contextApi";
import useOrderQuery from "../lib/query.related/orderquery";
import Loading from "../shared/Loading";
const Cart = () => {
  const { cart, removeAnItem } = CART.use();
  const { user } = AUTH.use();
  const [basket, setBasket] = useState<CartProps[]>([]);

  // useEffect(
  //   ()=>{
  //     const slesctedItems :CartProps=[]
  //     cart.map(item=>item.isOnBasket&&selectedItems.push(item))
  //     setBasket(slesctedItems)
  //   },[cart]
  // )

  const subTotal = useMemo(
    () =>
      basket.reduce(
        (accumulatedValue: number, item: ProductProps) =>
          accumulatedValue + item.quan * Number(item.price),
        0
      ),
    [basket]
  );
  const { updateFn } = useOrderQuery(user?.uid as string);
  const [isPending, startTransition] = useTransition();
  const onPay = useCallback(() => {
    startTransition(async () => {
      try {
        if (!user) {
          return alert("로그인 해주세요.");
        }
        //Todo: .env 파일에 clientkey 추가하기
        const toss = await loadTossPayments(import.meta.env.VITE_CLIENT_KEY!);
        const orderId = v4();
        const newPayment = {
          amount: {
            currency: "KRW",
            value: subTotal,
          },
          method: "CARD",
          orderId,
          orderName:
            basket.length > 1
              ? `${basket[0].name} 등 ${basket.length}개의 상품`
              : basket[0].name,
        };
        if (import.meta.env.PROD) {
          await toss
            .payment({ customerKey: user.uid })
            .requestPayment(newPayment as any);
        }
        await updateFn("CREATE", {
          amount: { currency: "KRW", value: subTotal },
          createdAt: "",
          items: basket,
          method: "CARD",
          orderId: "",
          orderName: basket.length > 1,
        });
        basket.map(async (item) => {
          await removeAnItem(item);
        });

        alert("결제가 완료되었습니다.");
      } catch (error: any) {
        return alert(error.message);
      }
    });
  }, [basket, subTotal]);

  return (
    <div className="flex flex-col gap-y-2.5 p-5">
      {isPending && <Loading className="top-0 bg-white/90 z-10" />}
      <h1 className="font-black text-2xl">장바구니</h1>
      <ul className="flex flex-col gap-y-2.5">
        {cart.map((item) => (
          <li key={item.id} className="hover:bg-bg dark:hover:bg-darkBorder">
            <CartItem {...item} />
          </li>
        ))}
      </ul>
      {basket.length > 0 && (
        <>
          <div className="text-right text-xl my-5">
            합계 ({basket.reduce((a, b) => a + b.quan, 0)}개의 상품):{" "}
            <b> {pricfy(subTotal)}원</b>
          </div>
          <button onClick={onPay} className="btn">
            결제하기
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
