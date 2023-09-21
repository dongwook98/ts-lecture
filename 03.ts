// 원시 래퍼 타입

const hello: string = 'hello';
const hell: String = 'hell'; // 타입에 대문자 ❌

function cc(a1: string, b2: string) {}
cc(hello, hell);

// 템플릿 리터럴 타입
type World = 'world' | 'hell';
const aaa: World = 'world';

const bbb = `hello ${aaa}`;

type Greeting = `hello ${World}`;
const ccc: Greeting = 'hello hell';

// rest
function rest(a: number, ...args: string[]) {
  console.log(a, args); // "1", ["2", "3"]
}
rest(1, '2', '3');

// 튜플
const tuple: [string, number] = ['1', 1];
tuple[2] = 'hello';

tuple.push('hello');
