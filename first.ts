// 1-1. 타입스크립트는 변수, 매개변수, 리턴값에 타입 붙이는 것!
// const a: string = '5';
// const b: number = 5;
// const c: boolean = true;
// const d: undefined = undefined;
// const e: null = null;

const f: 5 = 5; // 값 고정! ✨ 타입은 최대한 정확하게 작성하자.
// const f: any = true; // ❌❌❌ any 타입은 쓰지않아야한다.
// const g: symbol = Symbol.for('abc');
// const h: bigint = 1000000n;

// 함수 타이핑에는 3가지 방식이 있다.

// 1. 첫번째 방식 (매개변수와 반환값을 따로따로 타이핑한 것)
// 첫번째 방식은 함수 선언문에 적합한 방식이다.
function add(x: number, y: number): number {
  return x + y;
}

const add2 = (x: number, y: number): number => x + y; // 💩 되기는 하나, 별로 추천 ❌

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

// 1-2. 타입 추론을 적극 활용하자.
// const a: string = '5'; // ❌ 더 넓은 타입으로 지정해줌 오히려 안좋음
const a = '5';
const b = 5;
const c = true;
const d = undefined;
const e = null;

function add3(x: number, y: number) {
  return x + y;
}
const result = add3(1, 2); // 리턴값 타이핑 생략 => 타입추론

const obj2 = { name: '강동욱', age: 26 };

const arr5 = ['강동욱', '손흥민'];
const arr6 = [26, 31];

// const arr7 = [123, 456, '강동욱']; // ❌ 우리가 지정해준 타입대로 타입추론을 제대로 못함
const arr7: [number, number, string] = [123, 456, '강동욱']; // ⭕️

// 1-3. js 변환 시 사라지는 부분을 파악하자.
// 타입스크립트에서 타입을 제거해도 올바른 자바스크립트 코드여야한다.

// js 변환 시 사라지는 부분
// type Add = () => number;
// interface Minus {}
// Array<string>

// 심화
function add4(x: number, y: number): number; // js 변환 시 사라지는 부분
function add4(x, y) {
  return x + y;
}

let aa = 123;
aa = 'hello' as unknown as number; // as 뒷 부분 js 변환 시 사라지는 부분

// 1-4. never 타입과 느낌표(non-null assertion)
try {
  const array = [];
  array.push('hello');
} catch (error) {
  error;
}

const head = document.querySelector('#head')!;
console.log(head);

// <div id='header'></div>;

const head2 = document.querySelector('#head');
if (head2) {
  head2.innerHTML = 'hello';
}

// 1-5. 원시 래퍼 타입, 템플릿 리터럴 타입, rest, 튜플

// 원시 래퍼 타입
const hello: string = 'hello';
const hell: String = 'hell'; // 타입에 대문자 ❌

function cc(a1: string, b2: string) {}
cc(hello, hell);

new String();

// 템플릿 리터럴 타입
type World = 'world' | 'hell';
const aaa: World = 'world';

const bbb = `hello ${aaa}`; // 'hello world'

type Greeting = `hello ${World}`;
const ccc: Greeting = 'hello hell';

// rest
let arr8: string[] = [];
let arr9: Array<string> = [];
function rest(a: string, ...args: string[]) {
  console.log(a, args); // "1", ["2", "3"]
}
rest('1', '2', '3');

// 튜플
const tuple: [string, number] = ['1', 1];
tuple[2] = 'hello'; // 에러뜸
tuple.push('hello'); // 에러못막아줌
