// ✨ 타입스크립트는 변수, 매개변수, 리턴값에 타입 붙이는 것!
// 타이핑 : 타입을 붙여주는 행위
const a_1: string = '5';
const b_1: number = 5;
const c_1: boolean = true;
const d_1: undefined = undefined;
const e_1: null = null;
const f_1: any = 123; // 타입 아무거나 가능 (타입스크립트에서 any타입 쓰면 의미없음)
// 타입스크립트 주목적 : any를 없애는것!

/** 👍 팁
 * 타입 자리 헷갈리면
 * 타입부분을 지웠을 때 말이 되는 자바스크립트 코드여야한다.
 */

// 함수 타이핑 3가지 방법
// 1. function 함수
function add_1(x: number, y: number): number {
  return x + y;
}

// 1-2. 화살표 함수
const add_1_2: (x: number, y: number) => number = (x, y) => x + y;

// 2. type alias(타입 애일리어스)
type Add_1 = (x: number, y: number) => number;
const add_1_3: Add_1 = (x, y) => x + y;

// 3. interface 사용
// interface가 나중에 타입스크립트의 꽃이다.
interface Add_1_2 {
  (x: number, y: number): number;
}
const add_1_4: Add_1_2 = (x, y) => x + y;

// 객체 타이핑
const obj_1: { age: number; name: string } = { age: 26, name: '강동욱' };

// 배열 타이핑
// 1.
const arr_1: string[] = ['1', '2', '3', 'hello'];

// 2. <number> 제네릭 사용
const arr_1_2: Array<number> = [1, 2];

// 3. 튜플
const arr_1_3: [number, number, string] = [1, 2, 'hello'];

// 원시값 타이핑
// const는 변하지않음
// ✨ 타입은 최대한 정확하게 잡는게 좋다.
const g_1: true = true;

const h_1: 5 = 5;
