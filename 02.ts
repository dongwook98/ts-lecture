// 타입 추론

// ✨ 1. 타입스크립트가 정확하게 타입추론을 하였다면 건들지마라.
// ✨ 2. 타입은 최대한 좁게 적어라.
const five = 5;
const six = 6;

function add5(x: number, y: number) {
  // 매개변수 타이핑 하나라도 지우면 타입추론 잘못함
  // 리턴값 타이핑 지워도 추론 잘함
  return x + y;
}
const result = add5(1, 2);

const arr4 = ['1', '2', '3', 'hello'];

const arr5: Array<number> = [1, 2];

const arr6 = [1, 2, 'hello']; // 타입스크립트 추론 잘못하고있음.
// | 파이프 사용함 :(string | number)[]

const obj2 = { age: 26, name: '강동욱' };
