// 원시 래퍼 타입

const hello_3: string = 'hello';
const hell_3: String = 'hell'; // 타입에 대문자 X

function c_3(a1: string, b2: string) {}
c_3(hello_3, hell_3); // String 이라 에러

// 템플릿 리터럴 타입
type World_3 = 'world' | 'hell';
const aaa_3: World_3 = 'world';

const bbb_3 = `hello ${aaa_3}`;

type Greeting_3 = `hello ${World_3}`;
const ccc_3: Greeting_3 = 'hello hell'; // 자동완성도 지원해줌

// rest
function rest_3(a: number, ...args: string[]) {
  console.log(a, args); // 1, ["2", "3"]
}
rest_3(1, '2', '3');

// 튜플
const tuple_3: [string, number] = ['1', 1];
tuple_3[2] = 'hello'; // 에러
tuple_3.push('hello'); // 에러X 타입스크립트의 사소한 단점
