export default function pricfy(
  price: string | number,
  withDecimal?: boolean
): string {
  const copy = price.toString();
  if (!copy) {
    return "아무것도 입력되지 않았습니다.";
  }

  const regex = /^[0-9]+$/;

  const split = copy.split(".");

  if (!regex.test(split[0])) {
    return "숫자가 아닙니다.";
  }

  const first = Number(split[0]).toLocaleString();

  if (!withDecimal) {
    return first;
  }
  return first + "." + split[1];

  //   const length = copy.length;

  //   const array = Array.from({ length });

  //   const lengthSur = length % 3;

  //   let text = "";

  //   array.map((_, i) => {
  //     const iSur = i % 3;

  //     if (
  //       (iSur === 0 && lengthSur === 0 && i > 0) ||
  //       (iSur === 1 && lengthSur === 1 && i > 0) ||
  //       (iSur === 2 && lengthSur === 2 && i > 0)
  //     ) {
  //       text = text + "," + copy[i];
  //     } else {
  //       text = text + copy[i];
  //     }
  //   });

  //   return text;
}
