// forEach 제네릭 분석
interface Array<T> {
  forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
}

const a: Array<number> = [1, 2, 3];
a.forEach((value) => {
  console.log(value);
});
['1', '2', '3'].forEach((value) => {
  console.log(value);
});
[true, false, true].forEach((value) => {
  console.log(value);
});
['123', 123, true].forEach((value) => {
  console.log(value);
});

// 타입스크립트가 어떻게 추론하는걸까?
// T 중에서 하나라도 타입이 정해졌다면 나머지 전부 다 똑같이 추론을 한다.
function add_17<T>(x: T, y: T): T {
  return x;
}

add_17(1, 2);
add_17('1', '2');
add_17(true, false);
add_17<number>(1, 2); // T가 number라는걸 직접알려줌(타입스크립트가 추론을 잘못할 때 직접 알려줘야함 Type Parameter)
<string>add_17(1, 2); // 위치 조심.. 앞에 넣으면 강제 변환

// map 제네릭 분석
interface Array<T> {
  map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
}
const strings = [1, 2, 3].map((item) => item.toString()); // ['1', '2', '3'] string[]
