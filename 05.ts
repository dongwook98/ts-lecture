// 객체 타이핑!
// 1. 간단하게 타입 만들고 싶다면 type (타입 애일리어스)
type A_5 = { a: string };
const a_5: A_5 = { a: 'hello' };

// 2. 객체지향 프로그래밍 하고 싶다면 interface
interface B_5 {
  a: string;
}
const b_5: B_5 = { a: 'hello' };

// union 또는 (|)
function add_5(x: string | number, y: string | number): string | number {
  // ❌ 에초에 이런거를 만들지마라. // 처음 타입지정할때가 가장 중요함. 잘못하면 뒤에 줄줄이 꼬임
  return x + y;
}
const result_5: string | number = add_5(1, 2); // string | number로 타입추론하고 있음.
// 실제로 add_5(1, 2)는 number 타입이다.
// 타입스크립트가 result를 string이라고 착각할수도 있음.
result_5.charAt(); // 🚨 문자열 메서드 사용해서 에러!
add_5('1', '2');
add_5(1, '2');
add_5('1', 2);

// union (|) 또는
type A2_5 = { hello: 'world' } | { zero: 'cho' };
// 여러 속성 중 하나만 있으면 된다. union
const a2_5: A2_5 = { hello: 'world', zero: 'cho' };

// intersection (&)
// 둘 다 만족해야한다.
type A3_5 = string & number; // 이런거는 존재하지않음. 그럼 이거 어디다 씀?

// 객체에서 사용!
type A4_5 = { hello: 'world' } & { zero: 'cho' };
// 모든 속성이 다 있어야 한다. intersection
const a4_5: A4_5 = { hello: 'world', zero: 'cho' };
