import React, { useState } from "react";
import { getFromNow } from "../utils/dayjs";
import pricfy from "../utils/pricfy";
import { IoChevronDown } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

const OrderItem = (order: OrderProps) => {
  const { orderId, amount, createdAt, items, orderName } = order;
  const [isFull, setIsFull] = useState(false);
  return (
    <div className="border border-border dark:border-darkBorder p-2.5">
      <div className="flex gap-x-2.5">
        <div className="w-40 aspect-square">
          <img
            src={items[0].imgs[0]}
            alt={items[0].name}
            className="h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="font-bold text-xl">{orderName}</h2>
            <p>
              구입시기:{createdAt} <span>{getFromNow(createdAt)}</span>
            </p>
            <p>:{pricfy(amount.value)}원</p>
            <p>결제금액:{pricfy(amount.value)}원</p>
            <button
              className="border flex flex-row items-center gap-x-2.5 h-auto py-1 hover:shadow-none"
              onClick={() => setIsFull((prev) => !prev)}
            >
              {!isFull ? " 펼쳐보기" : "접기"}
              <IoChevronDown
                className={twMerge(
                  isFull && "rotate-180",
                  "transition duration-500"
                )}
              />
            </button>
          </div>
        </div>
      </div>
      <ul className="flex flex-wrap gap-1 mt-2.5">
        {items.map((item) => (
          <li>
            <div className="flex gap-x-2">
              <h3>{item.id}</h3>
              <p>구매수량:{item.quan}</p>
              <p>소계:{pricfy(item.quan * Number(item.price))}원</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderItem;
