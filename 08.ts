// 📌 인터페이스 끼리는 서로 합쳐진다
interface Human_8 {
  name: string;
}
interface Human_8 {
  think: boolean;
} // 👍 인터페이스는 중복되어도 에러 안남
const 강동욱: Human_8 = { name: '강동욱', think: true };

type Cat_8 = { name: string };
type Cat_8 = { age: number }; // 🚨 타입 애일리어스는 중복됬다고 에러 남
const 루비: Cat_8 = { name: '루비', age: 1 }; // 🚨 에러 남 // 맨 위에거만 인정되는 듯

// 📌 잉여 속성 검사
// 타입이 붙여준 변수에다가 직접 객체 리터럴을 넣으면 에러가 뜸
interface A_8 {
  a: string;
}
const obj_8: A_8 = { a: 'hello', b: 'world' }; // 🚨 잉여 속성 검사 에러
const obj_8_2: A_8 = obj_8; // 에러 해결

// void의 두 가지 사용법
// 첫번째 의미. 직접적으로 함수 리턴값 타이핑 자리에 void가 오면 리턴값이 있으면 안된다는 뜻
// 두번째 의미. 객체 매서드와 매개변수에 void가 들어가면 리턴값이 존재해도 되지만 쓰지는 않겠다는 뜻
function a_8(): void {
  return '3'; // 🚨 void 타입은 string 타입을 리턴할 수 없음. undefined만 가능! (주의) null도 안된다.
}

const b_8 = a_8();

// 메서드에 void가 들어가면 리턴값이 와도 상관 없다.
interface Human_8_2 {
  talk: () => void;
}

const human_8_2: Human_8_2 = {
  talk() {
    return 'abc';
  }, // ⭕️ 리턴값 타입이 void 인데 리턴값이 와도 에러 안남! 메서드의 void는 두번째 의미이다.
};

// 매개변수에 void는 것도 리턴값이 존재해도 된다.
function a_8_2(callback: () => void): void {}
a_8_2(() => {
  return '3';
});

// 📌 실전 예제

function forEach_8(arr: number[], callback: (el: number) => undefined): void;
function forEach_8() {}

let target_8: number[] = [];
forEach([1, 2, 3], (el) => target_8.push(el)); // 🚨 에러 // push()는 number 타입을 반환하기 때문!

// 📌 구현물 만들기 싫을때는 앞에 declare 써주면 된다. 대신에 자바스크립트로 변환시 사라진다.
declare function forEach_8_2(
  arr: number[],
  callback: (el: number) => undefined
): void;

let target_8_2: number[] = [];
forEach_8_2([1, 2, 3], (el) => {
  target_8_2.push(el); // 🚨  'void' 형식은 'undefined' 형식에 할당할 수 없습니다.
});
forEach_8_2([1, 2, 3], (el) => 
  target_8_2.push(el); // 🚨 'number' 형식은 'undefined' 형식에 할당할 수 없습니다.
);

declare function forEach_8_3(
  arr: number[],
  callback: (el: number) => void
): void;

let target_8_3: number[] = [];
forEach_8_3([1, 2, 3], (el) => target_8_3.push(el)); // 리턴값이 number여도 void여서 에러안남!
forEach_8_3([1, 2, 3], (el) => { target_8_3.push(el) }); // 에러안남!


interface A {
  talk: () => void;
}
const a: A = {
  talk() {
    return 3; // 원칙적으로는 void 면 리턴값을 안넣는게 맞다.
  }, // 타입스크립트는 메서드의 void니까 리턴값 3을 무시해버린다.
};
const b_8_2 = a.talk(); // 타입스크립트가 b의 타입을 void라고 바보처럼 추론한다.
// 이럴때는 강제로 타입을 변경해줘야한다.

// 강제로 타입 변경하는 방법1
const b_8_3 = a.talk() as unknown as number;
b_8_3.toFixed()

// 강제로 타입 변경하는 방법2
const b_8_4 = <number><unknown>a.talk();
b_8_4.toFixed();
