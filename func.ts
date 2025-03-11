//! 리액트에서 프랍스드릴링 할때 만약 함수를 전달한다면 그때 쓰면 됨
//! 기초 소양 교육

type Fn1<T = void> = (name: string) => T;

//! 인자값에 직접 타입을 주기, return 타입도 직접주기
const fn1: Fn1 = (name: string): string => {
  console.log("hello", name);
  return name;
};

// fn1("word");

// const n = fn1("world");

// console.log(n);

const fn2: Fn1 = (name: string): string => {
  console.log(name);
  return name;
};

fn2("hse");
