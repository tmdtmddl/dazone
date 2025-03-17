const makeRandomNumber = (length: number): number => {
  const count = Array.from({ length }, () => 9); //?  Array.from ??
  let max = "";
  let min = "";
  count.map((n, i) => {
    max = max + n.toString();
    if (i === 0) {
      min = "1";
    } else {
      min = min + "0";
    } //? 여기서는 뭘 맵으로 뿌리는 거임?
  });
  const maxNumber = Number(max);
  const minNumber = Number(min);

  const number =
    Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber; //????

  return number;
};

export default makeRandomNumber;

//? 인자로타입주는 것들 차이? ({}:{}) 이거랑 ({}:) ,(name:string) 객체랏서 ({}:)은 프랍스드릴링임 프랍스드릴링은 오브젝트임
