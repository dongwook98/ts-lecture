// 타입을 집합으로 생각하자. 넓은 타입과 좁은 타입
// 타입 대입 룰 : 좁은 타입은 넓은 타입에 넣을 수 있다. 반대로 넓은 타입은 좁은 타입에 넣을 수 없다.

type A_7 = string | number; // 넓은 타입
type B_7 = string; // 좁은 타입

type C_7 = string & number; // 더 좁은 타입

// any는 전체집합라고도 볼 수 있다.
// never는 공집합라고도 볼 수 있다.

// 객체
// 객체는 상세할수록 좁다.
type A2_7 = { name: string }; // 넓은 타입
type B2_7 = { age: number };

type AB2_7 = A2_7 | B2_7; // 제일 넓은 타입

type C2_7 = { name: string; age: number }; // A2_7과 비교하면 좁은 타입
// C2_7을 아래 처럼 표현 가능
type C3_7 = A2_7 & B2_7;

const ab_7: AB2_7 = { name: 'dongwook' };
const c_7: C2_7 = { name: 'dongwook', age: 26 };

// 특수사항(잉여 속성 검사)
const c_7_3: C2_7 = { name: 'dongwook', age: 26, married: false }; // 넓은 타입에다가 좁은 타입을 넣었는데 에러가 생김?? 버그임??
// 객체 리터럴을 바로 넣으면 잉여 속성 검사라고 추가적인 검사를 하나 더 한다.

// 위 에러 해결 방법 : 중간에 데이터를 한번 빼주면 해결
const obj_7 = { name: 'dongwook', age: 26, marreid: false };
const c2_7: C2_7 = obj_7; // ✨ 더 상세해지므로 C2_7보다 좁은타입! 좁은타입을 넓은타입에 대입하는것은 가능하다.
