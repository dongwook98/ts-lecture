// interface 끼리는 서로 합쳐진다.
interface Human_8 {
  name: string;
}
interface Human_8 {
  think: boolean;
} // interface는 중복되어도 에러 안남
const 강동욱: Human_8 = { name: '강동욱', think: true };

type Cat_8 = { name: string };
type Cat_8 = { age: number }; // 에러 'Cat_8' 식별자가 중복되었습니다.
const 루비: Cat_8 = { name: '루비', age: 1 }; // 에러 맨 위에거만 인정되는 듯

// 잉여 속성 검사
// 타입이 붙여준 변수에다가 직접 객체 리터럴을 넣으면 에러가 뜸
interface A_8 {
  a: string;
}
const obj_8: A_8 = { a: 'hello', b: 'world' }; // 🚨 잉여 속성 검사 에러
const obj_8_2: A_8 = obj_8; // 에러 해결

// void의 두 가지 사용법
// void 빗, 헛된, 공허한
// 첫번째 의미. 직접적으로 함수 리턴값 타이핑 자리에 void가 오면 리턴값이 있으면 안된다는 뜻
// 두번째 의미. 객체 매서드와 매개변수에 void가 들어가면 리턴값이 존재해도 되지만 쓰지는 않겠다는 뜻
function a_8(): void {
  return '3'; // 에러 'string' 형식은 'void' 형식에 할당할 수 없습니다. undefined만 가능! (주의) null도 안된다.
}
const b_8 = a_8();

// 메서드에 void가 들어가면 리턴값이 와도 상관 없다.
interface Human2_8 {
  talk: () => void;
}
const human2_8: Human2_8 = {
  talk() {
    return 'abc';
  },
};

// 매개변수에 void는 것도 리턴값이 존재해도 된다.
function a2_8(callback: () => void): void {}
a2_8(() => {
  return '3';
});

// 실전 예제
function forEach_8(arr: number[], callback: (el: number) => undefined): void;
function forEach_8() {}
// 위 처럼 구현물 만들기 싫을때는 앞에 declare 써주면 된다. 대신에 자바스크립트로 변환시 사라진다.
// 콜백함수의 리턴값 undefined일 경우
// 다음 forEach 2개의 코드는 잘 돌아가야 하는 코드인데, 이 때 void 타입이 없으면 리턴값 타입에 따라 일일이 타이핑 해줘야한다.
declare function forEach2_8(arr: number[], callback: (el: number) => undefined): void;
let target2_8: number[] = [];
forEach2_8([1, 2, 3], (el) => {
  target2_8.push(el); // 에러 'void' 형식은 'undefined' 형식에 할당할 수 없습니다. (5.1 버전에서는 해당 내용이 허용)
});
forEach2_8([1, 2, 3], (el) => target2_8.push(el)); // 에러 'number' 형식은 'undefined' 형식에 할당할 수 없습니다.

// 콜백함수의 리턴값 number일 경우
declare function forEach3_8(arr: number[], callback: (el: number) => number): void;
let target3_8: number[] = [];
forEach3_8([1, 2, 3], (el) => {
  target3_8.push(el); // 에러 'void' 형식은 'number' 형식에 할당할 수 없습니다.
});
forEach3_8([1, 2, 3], (el) => target3_8.push(el));

// 콜백함수의 리턴값 void일 경우 -> 실제 리턴값이 뭐든 상관하지 않으니까 에러 안남
declare function forEach4_8(arr: number[], callback: (el: number) => void): void;
let target4_8: number[] = [];
forEach4_8([1, 2, 3], (el) => target4_8.push(el));
forEach4_8([1, 2, 3], (el) => {
  target4_8.push(el);
});

interface A2_8 {
  talk: () => void;
}
const a3_8: A2_8 = {
  talk() {
    return 3; // 리턴값을 넣어도 상관없지만 원칙적으로는 void 면 리턴값을 안넣는게 맞다.
  },
};
const b2_8 = a3_8.talk(); // 타입스크립트가 b2_8의 타입을 void라고 바보처럼 추론한다. 실제로 b2_8은 3이다. 이럴때는 강제로 타입을 변경해줘야한다.

// 강제로 타입 변경하는 방법1
const b3_8 = a3_8.talk() as unknown as number;
b3_8.toFixed();

// 강제로 타입 변경하는 방법2 : 이 방법은 추천X
const b4_8 = <number>(<unknown>a3_8.talk());
b4_8.toFixed();
