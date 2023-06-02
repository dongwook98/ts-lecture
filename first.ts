// 변수 타이핑
const a: string = '5';
const b: number = 5;
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;

const f: 5 = 5; // 값 고정!
// const f: any = true; ❌ any 타입은 쓰지않아야한다.
// const f: symbol = Symbol.for('abc');
// const g: bigint = 1000000n;

// 함수 타이핑에는 3가지 방식이 있다.

// 1. 첫번째 방식 (매개변수와 반환값을 따로따로 타이핑한 것)
// 첫번째 방식은 함수 선언문에 적합한 방식이다.
function add(x: number, y: number): number {
  return x + y;
}

const add2 = (x: number, y: number): number => x + y;

// 2. 두번째 방식 (함수를 먼저 타이핑한 후에 값을 넣은 것)
// 두번째 방식은 함수 표현식에 적합한 방식이다.

// 2-1. 인라인
const minus: (x: number, y: number) => number = (x, y) => x - y;

// 2-2. type 키워드 사용해서 함수 타이핑
type minus2 = (x: number, y: number) => number;
const minus2: minus2 = (x, y) => x - y;

// 3. 세번째 방식
// interface 키워드 사용해서 함수 타이핑
interface multiply {
  (x: number, y: number): number;
}
const multiply: multiply = (x, y) => x * y;

// 객체 타이핑
const obj: { name: string; age: number } = { name: '강동욱', age: 26 };

// 배열 타이핑
const arr: string[] = ['강동욱', '손흥민'];
const arr2: number[] = [26, 31];

// <, > 사용 제네릭
const arr3: Array<number> = [123, 456];

// 튜플방식
const arr4: [number, number, string] = [123, 456, '강동욱'];
