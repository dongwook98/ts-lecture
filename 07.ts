// 큰 타입과 작은타입
// 넓은 타입을 좁은타입에 넣는것은 안된다.

type A7 = string | number; // 넓은 타입
type B7 = string; // 좁은 타입

type C7 = string & number;

// any는 전체집합
// never는 공집합

// 객체

type A6 = { name: string }; // 넓은 타입
type B6 = { age: number };

type AB6 = A6 | B6;

type C6 = { name: string; age: number }; // 좁은 타입
// type C6 = A6 & B6;

const ab: AB6 = { name: 'zerocho' };
const c6: C6 = { name: 'zerocho', age: 29 };
// 객체는 상세할수록 좁다.

const obj7 = { name: 'dongwook', age: 26, married: false };
const c7: C6 = obj7;
