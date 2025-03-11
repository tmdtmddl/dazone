//1. 문자열, 숫자,불리언,null, undfined

const a = "";
const b: string = "010";
const c: boolean = false;
console.log(c);

//2. 배열, 객체

const a1 = [1, "Dsfd", false, null];

const a2: number[] = [1, 2, 3];

const o = { name: "", age: 12 };
const o2: { name: string; age: number } = { age: 123, name: "df" };

const a3: { name: string; age: number }[] = [
  { name: "sdf", age: 123 },
  { name: "dfsd", age: 123123 },
];

const a4: Array<number> = [1, 2, 3];
const a5: number[] = [1, 2, 3];

type S = string;

const s1: S = "1";
const s2: S = "boolean";
const s3: S = "undefined";
const s4: S = "null";
const s5: S[] = ["1", "2", "3"];

type Type<T = string> = T;
// =은 기본값을 주는 것

const t1: Type<number> = 0;
const t2: Type<string> = "0";
const t3: Type = "";

type OBJ<M = string> = {
  name: string;
  age: number;
  mobile: M;
};

const p1: OBJ = { age: 12, name: "adffa", mobile: "010123123123" };
const p2: OBJ<number> = { age: 12, name: "adffa", mobile: 123123 };
const p3: OBJ<number | string | boolean>[] = [p1, { ...p2, mobile: false }];

interface Animal<P = number> {
  name: string;
  id: number;
  price: P;
  age: number;
  isFemail: boolean;
}

const an1: Animal = {
  name: "sf",
  age: 12,
  id: 123123,
  isFemail: false,
  price: 123,
};

const an2: Animal<string> = {
  age: 13,
  id: 123,
  name: "dfs",
  isFemail: false,
  price: "fsfd",
};

const an3: Animal<string>[] = [an1, an2];

const pr1 = Number(an3[0].price) * 12;
// const pr2 = an3[1].price * 12;
