// 원시 래퍼 타입

const hello_3: string = 'hello';
const hell_3: String = 'hell'; // 타입에 대문자 ❌

function c_3(a1: string, b2: string) {}
c_3(hello_3, hell_3); // 🚨 String 이라 에러

// 템플릿 리터럴 타입
type World_3 = 'world' | 'hell';
const aaa: World_3 = 'world';

const bbb = `hello ${aaa}`;

type Greeting = `hello ${World_3}`;
const ccc: Greeting = 'hello world'; // 자동완성도 지원해줌

// rest
function rest(a: number, ...args: string[]) {
  console.log(a, args); // 1, ["2", "3"]
}
rest(1, '2', '3');

// 튜플
const tuple: [string, number] = ['1', 1];
tuple[2] = 'hello'; // 🚨

tuple.push('hello'); // 이건 못막아줌 타입스크립트의 한계점
