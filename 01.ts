// ✨ 타입스크립트는 변수, 매개변수, 리턴값에 타입 붙이는 것!
// 타이핑 : 타입을 붙여주는 행위
const a: string = '5';
const b: number = 5;
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
const f: any = 123; // 타입 아무거나 가능 (타입스크립트에서 any타입 쓰면 의미없음)
// 타입스크립트 주목적 : any를 없애는것!

/** 👍 팁
 * 타입 자리 헷갈리면
 * 타입부분을 지웠을 때 말이 되는 자바스크립트 코드여야한다.
 */

// 함수 타이핑 3가지 방법
// 1. function 함수
function add(x: number, y: number): number {
  return x + y;
}

// 1-2. 화살표 함수
const add2: (x: number, y: number) => number = (x, y) => x + y;

// 2. type alias(타입 애일리어스)
type Add = (x: number, y: number) => number;
const add3: Add = (x, y) => x + y;

// 3. interface 사용
// interface가 나중에 타입스크립트의 꽃이다.
interface Add2 {
  (x: number, y: number): number;
}
const add4: Add2 = (x, y) => x + y;

// 객체 타이핑
const obj: { age: number; name: string } = { age: 26, name: '강동욱' };

// 배열 타이핑
// 1.
const arr: string[] = ['1', '2', '3', 'hello'];

// 2. <number> 제네릭 사용
const arr2: Array<number> = [1, 2];

// 3. 튜플
const arr3: [number, number, string] = [1, 2, 'hello'];

// 원시값 타이핑
// const는 변하지않음
// ✨ 타입은 최대한 정확하게 잡는게 좋다.
const g: true = true;

const h: 5 = 5;
