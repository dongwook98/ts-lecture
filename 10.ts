// 📌 타입스크립트는 모든 가능성을 고려한다.
function numOrStr(a: number | string) {
  a.toFixed(1); // 🚨 에러! // toFixed 메서드는 number 타입에만 가능하기 때문에 에러!
}
numOrStr('123');
numOrStr(1);

// as는 웬만하면 사용하지 말자. 우리가 실수할 가능성도 있다.
// 타입스크립트 단에서 에러가 안난다고 자바스크립트 단에서도 에러가 안나는건 아니다.
function numOrStr_10_2(a: number | string) {
  (a as number).toFixed(1);
}
numOrStr_10_2('123'); // 자바스크립트단에서 에러남
numOrStr_10_2(1);

// 위 같은 코드는 위험한 코드이다.
// 📌 이래서 나온 기법이 타입가드 기법이다.
function numOrStr_10_3(a: number | string) {
  if (typeof a === 'number') {
    // number
    a.toFixed(1);
  } else {
    // 타입스크립트가 else도 완벽하게 이해하는걸 볼 수 있음.
    // string
    a.charAt(3);
  }
  if (typeof a === 'string') {
    a.charAt(3);
  }
  if (typeof a === 'boolean') {
    // 여기는 절대 실행될수 없는 코드 // never라고 추론함
    a.toString(); // 🚨 'never' 형식에 'toString' 속성이 없습니다.
  }
}

// 📌 배열 타입 구분
function numOrNumArray(a: number | number[]) {
  if (Array.isArray(a)) {
    // number[]
    a.concat(4);
  } else {
    // number
    a.toFixed(3);
  }
}
numOrNumArray(123);
numOrNumArray([1, 2, 3]);

// 앞으로 타입스크립트에서 `| 또는` 타입이 자주 나온다.
// `| 또는` 타입일 때 서로 간의 타입을 구분 해주는게 매우 중요하다.

// 📌 클래스 타입 구분
// 클래스는 그 자체로 타입이 될 수 있다.
// 🚨 대신에 클래스 자체를 의미하는게 아니라 인스턴스를 의미한다.
// 클래스 간의 구분은 istanceof 로 구분한다.
class A_10 {
  aaa() {}
}
class B_10 {
  bbb() {}
}
function aOrB_10(param: A_10 | B_10) {
  if (param instanceof A_10) {
    param.aaa();
  } else {
    param.bbb();
  }
}
aOrB_10(A_10); // 🚨 클래스 그 자체는 에러!
aOrB_10(new A_10()); // 👍 인스턴스라 에러안남!
aOrB_10(new B_10());

// 📌 클래스 자체의 타입은 typeof 클래스(typeof A) 이다.
class A_10_2 {
  aaa() {}
}
class B_10_2 {
  bbb() {}
}
function aOrB_10_2(param: typeof A_10_2 | B_10_2) {}
aOrB_10_2(A_10_2); // 👍 typeof A_10_2 이므로 클래스 그 자체가 와서 에러 안남
aOrB_10_2(new A_10_2()); // 🚨 typeof A_10_2 이므로 인스턴스가 와서 에러 남
aOrB_10_2(new B_10_2());

// 정리
// 원시값 - `typeof`
// 배열 - `Array.isArray()`
// 클래스 - `instanceof` 로 구분 한다.
// 객체 - 객체의 value들로 구분하거나 key로 구분한다.

// 📌 객체 타입 구분
type B_10_3 = { type: 'b'; bbb: string };
type C_10_3 = { type: 'c'; ccc: string };
type D_10_3 = { type: 'd'; ddd: string };

function typeCheck(a: B_10_3 | C_10_3 | D_10_3) {
  if (a.type === 'b') {
    a.bbb; // 👍 B_10_3로 추론하고 있음
  } else if (a.type === 'c') {
    a.ccc; // 👍 C_10_3로 추론하고 있음
  } else {
    a.ddd; // 👍 D_10_3로 추론하고 있음
  }
}
// 타입스크립트가 if 문 에 대해서 타입추론을 매우 정확하게 해주고 있다.

// 📌 객체는 타입 구별하기가 Array.isArray() 이런게 없어서 구별하기 어렵다고 생각할 수 있지만
// 객체 안의 속성으로 구별하면 된다.
type B_10_4 = { type: 'b'; bbb: string };
type C_10_4 = { type: 'c'; ccc: string };
type D_10_4 = { type: 'c'; ddd: string };

function typeCheck_10(a: B_10_4 | C_10_4 | D_10_4) {
  if (a.type === 'b') {
    a.bbb; // 👍 B_10_4로 추론하고 있음
  } else if (a.type === 'c') {
    a.ccc; // 👍 C_10_4 | D_10_4로 추론하고 있음 그래서 에러
  } else {
    a.ddd; // 👍 never로 추론하고 있음 그래서 에러
  }
}

// 📌 객체 간의 타입 검사를 하려면은
// 객체 간의 차이를 만들어야한다.
// 1. type의 값이 다름
// 2. 속성이 서로 다름
// in 연산자를 활용해서 속성명으로도 구별할 수 있다.
// 근데 보통은 값으로 구분하는 방법을 많이쓴다.
type B_10_5 = { type: 'b'; bbb: string };
type C_10_5 = { type: 'c'; ccc: string };
type D_10_5 = { type: 'd'; ddd: string };

function typeCheck_10_2(a: B_10_5 | C_10_5 | D_10_5) {
  if ('bbb' in a) {
    a.bbb; // 👍 B_10_5로 추론하고 있음
  } else if ('ccc' in a) {
    a.ccc; // 👍 C_10_5로 추론하고 있음
  } else {
    a.ddd; // 👍 D_10_5로 추론하고 있음
  }
}

// ✨ 팁
// 그래서 보통은 객체를 만들때는 이런 습관을 만들면 좋다.
// 객체 속성에다가 type 이라는 속성을 하나씩 넣는 습관을 들이자.
// 객체에다가 태그, 라벨을 달아둔다는 표현으로 많이 말한다.
const human = { type: 'human' };
const dog = { type: 'dog' };
const cat = { type: 'cat' };

function typeCheck_10_3(a: typeof human | typeof dog | typeof cat) {
  if (a.type === 'human') {
    a.type;
  } else if (a.type === 'dog') {
    a.type;
  } else {
    a.type;
  }
}

// 📌 만약에 태그, 라벨을 안달아뒀다면
// 객체 간의 차이를 알아내서
// 속성으로 구분하자.
const human_10 = {
  name: 'human_10',
  talk() {
    console.log('말하기');
  },
};
const dog_10 = {
  name: 'dog_10',
  bow() {
    console.log('멍멍');
  },
};
const cat_10 = {
  name: 'cat_10',
  meow() {
    console.log('야옹');
  },
};

function typeCheck_10_4(a: typeof human_10 | typeof dog_10 | typeof cat_10) {
  if ('talk' in a) {
    a.talk();
  } else if ('bow' in a) {
    a.bow();
  } else {
    a.meow();
    a.name;
  }
}
