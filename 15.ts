// 옵셔널, 제네릭 기본
// 옵셔널 (?) : 있어도 되고 없어도 된다는 의미
function abc_15(a: number, b?: number, c?: number) {}
abc_15(1);
abc_15(1, 2);
abc_15(1, 2, 3);
abc_15(1, 2, 3, 4); // 에러 1-3개의 인수가 필요한데 4개를 가져왔습니다.

// 전부 다 받고 싶으면 …(rest) 사용
function abc_15_2(...args: number[]) {
  console.log(args); // [1, 2, 3, 4]
}
abc_15_2(1, 2, 3, 4);

// b 속성 없어도 에러 안냄
let obj: { a: string; b?: string } = { a: 'hello' };

// 제네릭
// 제네릭이 왜 필요한지 부터 보자
function add_15(x: string | number, y: string | number): string | number {
  return x + y;
}
add_15(1, 2); // 3
add_15('1', '2'); // '12'
// 위에 2개는 되게하고
// 아래 2개는 안되게하고 싶다면?
add_15(1, '2'); // '12'
add_15('1', 2); // '12'

// 함수를 둘로 나눠볼까?
// 바디가 있는 함수 add2_15 를 2개 선언했기 때문에 에러 난다.
function add2_15(x: string, y: string): string {
  return x + y;
}
function add2_15(x: number, y: number): number {
  return x + y;
}

// 그렇다면 바디를 없애면?
// 결국 처음에 썼던 방법으로 돌아옴
// 딜레마에 빠짐..
function add3_15(x: string, y: string): string;
function add3_15(x: number, y: number): number;
function add3_15(x: string | number, y: string | number): string | number {
  return x + y;
}

// 이러한 딜레마를 해결하기 위해서 제네릭이 나왔다.
// 제네릭 : 타입을 변수처럼 만드는 것
// 만들때는 무슨 타입인지는 모르겠는데 실제 사용을 할 때 그 때 타입이 정해지는 것이다.
function add4_15<T>(x: T, y: T): T {
  return x + y;
}

add4_15(1, 2);
add4_15('1', '2');

add4_15('1', 2); // 에러 '2' 형식의 인수는 '"1"' 형식의 매개 변수에 할당될 수 없습니다.
add4_15('2', 1); // 에러 '1' 형식의 인수는 '"2"' 형식의 매개 변수에 할당될 수 없습니다.
// 같은 타입은 하나의 문자(T)로 표현!

// T가 어떤 타입이든 다 될 수 있다고 했는데 그러면 범위가 너무 넓다
// add(true, false) 이런것도 되버리는 문제가 있다.
function add5_15<T>(x: T, y: T): T {
  return x + y;
}

add5_15(1, 2);
add5_15('1', '2');

add5_15(true, false); // 💩 안되게 하고 싶은데 되버림;;
add5_15('1', 2); // 에러 '2' 형식의 인수는 '"1"' 형식의 매개 변수에 할당될 수 없습니다.
add5_15('2', 1); // 에러 '1' 형식의 인수는 '"2"' 형식의 매개 변수에 할당될 수 없습니다.

// 이럴때는 T에다가 제한을 둘 수 있다.
function add6_15<T extends string | number>(x: T, y: T): T {
  return x + y;
}

add6_15(1, 2);
add6_15('1', '2');

add6_15(true, false); // 에러 'boolean' 형식의 인수는 'string | number' 형식의 매개 변수에 할당될 수 없습니다.
add6_15('1', 2); // 에러 '2' 형식의 인수는 '"1"' 형식의 매개 변수에 할당될 수 없습니다.
add6_15('2', 1); // 에러 '1' 형식의 인수는 '"2"' 형식의 매개 변수에 할당될 수 없습니다.

// 제네릭을 여러개 동시에 만들면서 각각 다른 제한 두기
function add7_15<T extends number, K extends string>(x: T, y: K): T {
  return x + y;
}

add7_15(1, 2); // 에러
add7_15('1', '2'); // 에러

add7_15(true, false); // 에러
add7_15('1', 2); // 에러
add7_15('2', 1); // 에러
add7_15(1, '2'); // ⭕️

function add8_15<T extends string | number>(x: T): T {
  return x;
}

add8_15('1');
add8_15(1);
// string, number, string | number
// T에는 string | number의 부분집합들만 올 수 있다.
// → string, number, string | number

// 각종 타입 제한 방법

// - 객체
function add9_15<T extends { [key: string]: string }>(x: T): T {
  return x;
}

add9_15({ a: 'hello' });

// - 배열
function add10_15<T extends string[]>(x: T): T {
  return x;
}

add10_15(['1', '2', '3']);

// - 콜백함수 형태 제한
function add11_15<T extends (a: string) => number>(x: T): T {
  return x;
}

add11_15((a) => +a);

// 모든 함수 다 가능하게 하고 싶다면 이럴때는 any 써도 된다.
function add12_15<T extends (...args: any) => any>(x: T): T {
  return x;
}

// 생성자만 가능하게
function add13_15<T extends abstract new (...args: any) => any>(x: T): T {
  return x;
}

class A13_15 {
  constructor() {}
}
add13_15(A13_15);
add13_15(new A13_15()); // 에러 'A13_15' 형식에서 'new (...args: any): any' 시그니처에 대한 일치하는 항목을 제공하지 않습니다.

// constructor 타이핑
function add14_15<T extends abstract new (...args: any) => any>(x: T): T {
  return x;
}

interface Aa14_15 {
  constructor(): void;
}
class A14_15 implements Aa14_15 {
  constructor() {}
}

add14_15(A14_15);

// 📌 constructor 타이핑 2
class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getInfo(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

const john = new Person('John Doe', 30);
console.log(john.getInfo()); // 출력: Name: John Doe, Age: 30

// 📌 참고
// 생성자(constructor)는 객체 지향 프로그래밍에서 클래스로부터 객체(인스턴스)를 생성할 때 호출되는 특별한 메서드입니다. 생성자는 클래스의 인스턴스가 만들어질 때 초기화 작업을 수행하거나 필요한 리소스를 할당하는 역할을 합니다.
// 주요 특징과 의미는 다음과 같습니다:
// 이름이 클래스와 동일: 생성자 메서드의 이름은 해당 클래스의 이름과 동일합니다.
// 인스턴스 초기화: 생성자는 클래스의 인스턴스가 만들어질 때 실행되며, 이 시점에서 인스턴스 변수를 초기화하거나 초기값을 설정할 수 있습니다.
// 인수 전달: 생성자는 필요에 따라 매개변수를 받아들일 수 있으며, 이를 통해 생성자가 호출될 때 인스턴스에 초기 데이터를 제공할 수 있습니다.
// 예를 들어, 다음은 TypeScript에서 클래스와 생성자를 사용하여 객체를 초기화하는 간단한 예제입니다:

class Person_15 {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const john_15 = new Person_15('John');
john_15.introduce(); // 출력: Hello, my name is John.
// 위의 예제에서 Person 클래스에는 constructor라는 생성자 메서드가 있으며, 이 생성자는 name 매개변수를 받아서 name 멤버 변수를 초기화합니다. new Person('John')을 호출하면 Person 클래스의 인스턴스가 생성되고 name이 'John'으로 초기화됩니다. 이후 introduce 메서드를 호출하여 'Hello, my name is John.'을 출력합니다.
