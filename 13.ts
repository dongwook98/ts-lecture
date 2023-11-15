// readonly (읽기 전용)
// 속성 바꾸는 실수를 막아줄 수 있다.
interface A_13 {
  readonly a: string;
  b: string;
}
const obj_13: A_13 = {
  a: 'hello',
  b: 'world',
};
obj_13.a = '123'; // 에러 읽기 전용 속성이므로 'a'에 할당할 수 없습니다.

// 인덱스드 시그니처
// 속성이 너무 많을때 일일이 쓰기 힘듬 그럴 때 쓰는게 인덱스드 시그니처이다.
type A2_13 = { [key: string]: number };
const obj2_13: A2_13 = { a: 3, b: 5, c: 5, d: 123 };

// 맵드 타입스
// 키 타입 제한을 줄 수 있음
// 최대한 정확한 타입을 만들기 위해 중요!
type B_13 = 'Human' | 'Mammal' | 'Animal';
type A3_13 = { [key in B_13]: B_13 };
const obj3_13: A3_13 = { Human: 'Animal', Mammal: 'Human', Animal: 'Animal' };
