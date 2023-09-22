// 객체 타이핑!

// 간단하게 타입 만들고 싶다면 type (타입 애일리어스)
type A_5 = { a: string };
const a_5: A_5 = { a: 'hello' };

// 객체지향 프로그래밍 하고 싶다면 interface
interface B_5 {
  a: string;
}
const b_5: B_5 = { a: 'hello' };

// union 또는 (|)
function add_5(x: string | number, y: string | number): string | number {
  // ❌ 에초에 이런거를 만들지마라. // 처음 타입지정할때가 가장 중요함. 잘못하면 뒤에 줄줄이 꼬임
  return x + y;
}
const result_5: string | number = add(1, 2); // string | number로 타입추론하고 있음.
// 타입스크립트가 string이라고 착각할수도 있음.
result_5.charAt(); // 🚨 에러!
add('1', '2');
add(1, '2');
add('1', 2);

// union (|) 또는
// 하나만 만족해도 된다.
type A_5_2 = { hello: 'world' } | { zero: 'cho' };
const a_5_2: A_5_2 = { hello: 'world' };

// intersection (&)
// 둘 다 만족해야한다.
type A_5_3 = string & number; // 이런거는 존재하지않음. 그럼 이거 어디다 씀?

// 객체에서 사용!
type A_5_4 = { hello: 'world' } & { zero: 'cho' };
// 모든 속성이 다 있어야 한다 intersection
const a_5_3: A_5_4 = { hello: 'world', zero: 'cho' };
