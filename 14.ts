// 클래스의 새로운 기능들
// class 원본
class A_14 {
  a: string;
  b: number;
  constructor() {
    this.a = '123';
    this.b = 123;
  }

  method() {}
}

// 아래 처럼 constructor 생략 가능
class A_14_2 {
  a: string = '123';
  b: number = 123;

  method() {}
}

// constructor 가 필요한 이유
// constructor 타이핑 하기위해 정도가 이유
// constructor 잘 안쓰임
class A_14_3 {
  a: string;
  b: number;
  constructor(a: string, b: number = 123) {
    this.a = a;
    this.b = b;
  }

  method() {}
}

const a_14_3 = new A_14_3('123'); // 기본값이 있으면 인수로 하나만 넣어줘도 된다.

// 📌 기본값이 있으면 ? 안붙여도 됌
class A_14_4 {
  a: string;
  b: number;
  constructor(a: string, b?: number = 123) {
    // 🚨 ? 왜붙이냐 에러 뜸
    this.a = a;
    this.b = b;
  }

  method() {}
}

const a_14_4 = new A_14_4('123');

// 📌 클래스의 이름은 그 자체로 타입이 될 수 있다.
// 클래스의 이름은 인스턴스를 가르킨다.
// 클래스 자체의 타입은 typeof 를 붙여야한다.
class A_14_5 {
  a: string;
  b: number;
  constructor(a: string, b: number = 123) {
    this.a = a;
    this.b = b;
  }

  method() {}
}

type AA = A_14_5; // 인스턴스를 가르킴
const a_14_5: A_14_5 = new A_14_5('123');
typeof A_14_5; // 클래스 자체를 가르키는 타입
const b: typeof A_14_5 = A_14_5;

// 📌 프라이빗 프로퍼티
// 타입스크립트 프라이빗을 추천
// 자바스크립트에서 제공하는 프라이빗은 protected가 안되기 때문에
// 좀 더 정교하게 쓰고 싶다면 타입스크립트 프라이빗을 권장

// 다만 타입스크립트 프라이빗은 실제 코드에서는 퍼블릭으로 바뀜
// 이게 좀 문제긴한데 타입스크립트 단계에서는 에러가 뜨기 때문에 괜찮음
class A_14_6 {
  private a: string = '123'; // 타입스크립트에서 제공하는 private
  // protected와 구분 가능
  #b: number = 123; // 자바스크립트에서 제공하는 private

  method() {
    console.log(this.a, this.#b);
  }
}

// 클래스
// 📌 클래스의 모양을 interface로 통제 가능하다.
interface A_14_7 {
  readonly a: string;
  b: string;
}
class B_14_7 implements A_14_7 {
  a: string = 123; // 🚨 에러 'number' 형식은 'string' 형식에 할당할 수 없습니다.
  b: string = 'world';
}
class C_14_7 extends B_14_7 {}
new C_14_7().a;
new C_14_7().b;

// 📌 private, protected, public
interface A_14_8 {
  readonly a: string;
  b: string;
}
class B_14_8 implements A_14_8 {
  // 🚨 에러 A와 다르다고 에러가 뜸 // 'a' 속성은 'B_14_8' 형식에서 private이지만 'A_14_8' 형식에서는 그렇지 않습니다.
  private readonly a: string = '123';
  protected b: string = 'world';
  c: string = 'wow';

  method() {
    console.log(this.a);
    console.log(this.b);
    console.log(this.c);
  }
}

class C_14_8 extends B_14_8 {
  method() {
    console.log(this.a); // 🚨 private는 상속 받아서 사용못함
    console.log(this.b); // protected는 상속한 애들까지는 사용가능
    console.log(this.c);
  }
}
new C_14_8().a; // 🚨 private 인스턴스에서 사용못함
new C_14_8().b; // 🚨 protected 인스턴스에서 사용못함
new C_14_8().c; // public 이라 인스턴스에서 접근가능

//               public               protected                  private
// 클래스내부          O                     O                         O
// 인스턴스           O                      X                         X
// 상속클래스         O                      O                         X

// 📌 위 코드를 자바스크립트로 변환하면 private, protected, public 전부 다 사라짐
// "use strict";
// class B_14_9 {
//     constructor() {
//         this.a = '123';
//         this.b = 'world';
//         this.c = 'wow';
//     }
//     method() {
//         console.log(this.a);
//         console.log(this.b);
//         console.log(this.c);
//     }
// }
// class C_14_9 extends B_14_9 {
//     method() {
//         console.log(this.a);
//         console.log(this.b);
//         console.log(this.c);
//     }
// }
// new C_14_8().a;
// new C_14_8().b;
// new C_14_8().c;
