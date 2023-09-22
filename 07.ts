// 📌 타입을 집합으로 생각하자!
// 넓은 타입과 작은타입
// 넓은 타입을 좁은타입에 넣는것은 안된다.
// 반대로 좁은타입을 넓은타입에 넣는것은 가능하다.

type A_7 = string | number; // 넓은 타입
type B_7 = string; // 좁은 타입

type C_7 = string & number; // never

// any는 전체집합라고도 볼 수 있다.
// never는 공집합라고도 볼 수 있다.

// 객체
// 객체는 상세할수록 좁다.

type A_7_2 = { name: string }; // 넓은 타입
type B_7_2 = { age: number };

type AB_7_2 = A_7_2 | B_7_2; // 제일 넓은 타입

type C_7_2 = { name: string; age: number }; // 제일 좁은 타입
type C_7_3 = A_7_2 & B_7_2; // C_7_2와 같음

const ab_7: AB_7_2 = { name: 'zerocho' };
const c_7: C_7_2 = { name: 'zerocho', age: 29 };

const obj_7 = { name: 'dongwook', age: 26, marreid: false };
const c_7_2: C_7_2 = obj_7; // ✨ 더 상세해지므로 C_7_2보다 좁은타입! 좁은타입을 넓은타입에 대입하는것은 가능하다.

// 📌 특수사항(잉여 속성 검사)
const c_7_3: C_7_2 = { name: 'dongwook', age: 26, married: false }; // 넓은 타입에다가 좁은 타입을 넣었는데 에러가 생김?? 버그임??

// 객체 리터럴을 바로 넣으면 잉여 속성 검사라고 추가적인 검사를 하나 더 한다.

// 👍 해결 방법
// 중간에 데이터를 한번 빼주면 해결 가능!
const obj_7_2 = { name: 'dongwook', age: 26, married: false }; // 👍 에러 안남!
const c_7_4: C_7_2 = obj_7_2;
