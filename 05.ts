// 간단하게 타입 만들고 싶다면 type
type A = { a: string };
const a2: A = { a: 'hello' };

// 객체지향 프로그래밍 하고 싶다면 interface
interface B {
  a: string;
}
const b2: B = { a: 'hello' };

// ❌ 에초에 이런거를 만들지마라.
// 처음 타입지정할때가 가장 중요함. 잘못하면 뒤에 줄줄이 꼬임
// union
function add(x: string | number, y: string | number): string | number {
  return x + y;
}
const result2: string | number = add(1, 2); // string | number로 타입추론하고 있음.
// 타입스크립트가 string이라고 착각할수도 있음.
result2.charAt(); // 🚨 에러!
add('1', '2');
add(1, '2');
add('1', 2);

// union (|)
// 하나만 만족해도 된다.
type A2 = { hello: 'world' } | { zero: 'cho' };
const a3: A2 = { hello: 'world' };

// intersection (&)
type A4 = string & number; // 이런거는 존재하지않음. 그럼 이거 어디다 씀?

// 객체에서 사용!
type A3 = { hello: 'world' } & { zero: 'cho' };
// 모든 속성이 다 있어야 한다 intersection
const a: A3 = { hello: 'world', zero: 'cho' };
