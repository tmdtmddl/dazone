import { useCallback, useState } from "react";
import { PRODUCT } from "../contextApi";
import { twMerge } from "tailwind-merge";
import {
  FaRegStar,
  FaStar,
  FaPinterest,
  FaFacebook,
  FaLink,
} from "react-icons/fa";
import { FaLocationDot, FaShareFromSquare, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ProductMe = () => {
  const [isshare, setisShare] = useState(false);
  const shareHandlner = () => setisShare((prev) => !prev);
  const { products } = PRODUCT.store();

  const firstProduct = products[0];

  const { imgs, name, price, quan } = firstProduct;

  const onClick = useCallback(() => {
    if (confirm("장바구니에 추가하시겠습니까?")) {
      alert("추가되었습니다.");
    } else {
      alert("취소했습니다.");
    }
  }, []);

  return (
    <div className="pt-16 flex max-w-300  mx-auto justify-between p-2.5  gap-x-5 ">
      <div className="flex flex-col gap-y-2">
        <div className="flex gap-x-2 relative">
          <div className="border h-60 min-w-80 max-w-80 box-border flex overflow-auto">
            {imgs.map((i, index) => (
              <img src={i} alt={name} key={index} />
            ))}
          </div>
          <button className="p-0 h-5 " onClick={shareHandlner}>
            <FaShareFromSquare className="text-xl" />
          </button>
          {isshare && (
            <div className="border flex flex-row absolute bg-white rounded-xl left-50  top-5">
              <ul className="px-1">
                <li className="flex flex-row items-center">
                  <MdEmail className="text-xl" />
                  <button>
                    <p>이메일</p>
                  </button>
                  <button
                    className="w-5 h-5 hover:border hover:border-sky-300"
                    onClick={shareHandlner}
                  >
                    X
                  </button>
                </li>
                <hr />
                <li className="flex flex-row items-center">
                  <FaPinterest className="text-xl text-red-500" />
                  <button>핀터레스트</button>
                </li>
                <hr />
                <li className="flex flex-row items-center">
                  <FaFacebook className="text-xl text-blue-600 rounded-full" />
                  <button>페이스북</button>
                </li>
                <hr />
                <li className="flex flex-row items-center rounded-full">
                  <FaXTwitter className="text-xl text-white p-0.5 bg-black rounded-full " />
                  <button>엑스</button>
                </li>
                <hr />
                <li className="flex flex-row items-center">
                  <FaLink className="text-xl" />
                  <button>링크복사</button>
                </li>
              </ul>
            </div>
          )}
        </div>
        <ul className="flex gap-x-1 max-w-80">
          {imgs.map((im) => (
            <li
              key={im}
              className="border rounded-xl w-20 h-20 overflow-hidden hover:border-blue-600 hover:shadow-xl hover:shadow-blue-200 "
            >
              <button className="px-0 w-20 h-20 ">
                <img src={im} alt={name} className="w-20 h-20 object-cover" />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-y-2 min-w-100 ">
        <p className="font-bold text-2xl">{name}</p>
        <span className="flex gap-x-1 text-orange-400 items-center">
          <p>3.8</p>
          <div className="flex">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
          </div>
          <a className="text-blue-600 hover:shadow-none h-5">478review</a>
        </span>
        <hr className={hr} />
        <div className="flex">
          가격: <p className="font-bold">{price}</p>원
        </div>
        <p className="text-blue-600">무료국제반품</p>
        <div className="flex">
          <p className="text-gray-500">색상:</p>
          <p className="font-bold"> red</p>
        </div>
        <div className="flex">
          <p className="text-gray-500 ">스타일:</p>
          <p className="font-bold"> 머리받침 없음</p>
        </div>
        <div className="flex flex-col gap-x-1">
          <div className={psWrap}>
            <p className={ptitle}>상표</p>
            <p>아마존 기본 정보</p>
          </div>
          <div className={psWrap}>
            <p className={ptitle}>색상</p>
            <p>red</p>
          </div>
          <div className={psWrap}>
            <p className={ptitle}>제품 치수</p>
            <p>19.69"깊이 x 20.1"너비 x 42.5"높이</p>
          </div>
          <div className={psWrap}>
            <p className={ptitle}>백 스타일</p>
            <p>솔리드 백</p>
          </div>
          <div className={psWrap}>
            <p className={ptitle}>특징</p>
            <p>
              높이 조절 가능, 인체공학적 요추 지지대, 기울임, 360도 회전, 플립업
              암레스트
            </p>
          </div>
        </div>
      </div>

      <div className="border p-5 rounded border-gray-400 w-45 flex flex-col  gap-y-3">
        <p className="font-bold">{price}원</p>
        <div className="flex items-center gap-x-0.5">
          <FaLocationDot />
          <a className="text-blue-700 hover:shadow-none">주소</a>
        </div>
        <p className="text-green-800 text-xl font-bold">재고:{quan}</p>
        <select
          name="quans"
          id="quans"
          className="border  border-gray-400 w-35 rounded bg-gray-50 hover:bg-gray-100 p-1"
        >
          <option value="1" id="quans">
            수량
          </option>
          {quans.map((q) => (
            <option value={q} key={q}>
              {q}
            </option>
          ))}
        </select>
        <button onClick={onClick} className={twMerge(btns, "bg-amber-300")}>
          Add to cart
        </button>
        <button className={twMerge(btns, "bg-orange-400")}>
          <a className="hover:shadow-none">Buy Now</a>
        </button>
        <div className="flex gap-x-1">
          <input type="checkbox" />
          <p>반품영수증 추가</p>
        </div>
        <hr className={hr} />
        <button className="border border-gray-400 bg-gray-50 rounded-xl h-8 hover:bg-gray-100">
          리스트에 추가
        </button>
      </div>
    </div>
  );
};

export default ProductMe;

const quans = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

const btns = "p-1 h-8 w-35 rounded-2xl";

const ptitle = "font-bold w-30";

const psWrap = "flex justify-between";

const hr = "text-gray-300";
