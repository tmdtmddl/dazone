import { useMemo, useTransition } from "react";
import pricfy from "../utils/pricfy";
import { CheckBox, Quan } from "../ui";
import { CART } from "../contextApi";
import Loading from "../shared/Loading";

interface Props {
  item: CartProps;
  basket: CartProps[];
  
}

const CartItem = ({ item, basket}: Props) => {
  const { name, desc, imgs, id, price, quan ,isOnBasket} = item;

  const isSelected = useMemo(() => {
    const foundItem = basket.find((basketItem) => basketItem.id === id);
    return foundItem ? true : false;
  }, [id, basket]);

  const { updateAnItem } = CART.use();
  const [isCheckBoxPending,startCheckBoxTransition]=useTransition()
  const [isQuanPending,startQuanTransition]=useTransition()
  return (
    <div className="flex p-2.5 border-border border rounded dark:border-darkBorder relative">
     {isCheckBoxPending && <Loading className="absolute  h-full bg-white/80"/>}
      <CheckBox state={isOnBasket} onClick={async() => {const{success,message}=await updateAnItem({...item,isOnBasket:!isOnBasket})if(!success){return alert (message)}}}/>

      <div className="flex-1 flex gap-x-2.5">
        <div className="overflow-hidden aspect-square w-30 sm:w-40">
          <img
            src={imgs[0]}
            alt={name}
            className="aspect-square object-cover hover:scale-105 transition"
          />
        </div>
        <div className="flex flex-col gap-y-1 flex-1 w-2">
          <p className="font-bold truncate">{name}</p>
          <p className="font-light line-clamp-4 leading-5">{desc}</p>
          <Quan
          
            quan={quan}
            onChange={async (newQuan) => {
              if (newQuan === 0) {
                return;
              }
              const newItem: CartProps = { ...item, quan: newQuan };
              await updateAnItem(newItem);
              onSelect(newItem);
            }}
          />
          <button className="hover:shadow-none text-warning" onClick={async()=>{if(confirm(`${name}을 삭제하시겠습니까?`)){
            const{success,message}=await removeAnItem(item)
            if(!success){
              return alert(message)
            }
            return alert("삭제되었습니다.")
          }}}>삭제</button>
        </div>
        <p>₩{pricfy(price)}</p>
      </div>
    </div>
  );
};

export default CartItem;
