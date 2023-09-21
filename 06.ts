type Animal = { breath: true };
type Poyouryu = Animal & { breed: true };
type Human = Poyouryu & { think: true };

// &는 확장의 개념

const zerocho: Human = { breath: true, breed: true, think: true };

interface A1 {
  breath: true;
}
interface B1 extends A1 {
  breed: true;
}
const c444: B1 = {
  breath: true,
  breed: true,
};

// interface는 같은 이름으로 여러번 선언가능
// 선언할때마다 합쳐진다.
// 그래서 라이브러리들이 대부분 다 interface로 만들어짐
// 그래서 우리가 맘에 안들면 남의 라이브러리 코드를 수정할 수 있다.
interface A5 {
  talk: () => void;
}
interface A5 {
  eat: () => void;
}
interface A5 {
  shit: () => void;
}
const a23: A5 = { talk() {}, eat() {}, shit() {}, sleep() {} };

interface A5 {
  sleep: () => void;
}

// 타입 네이밍 룰
interface Props {}
type Type = string | number;
enum Hello {
  Left,
  Right,
}

const a5: Props = {};

// interface와 type의 차이점
// 명확하게 둘이 구분되어 있짆않음
// 기능적차이가 있다해도 중요하지않음
// 표현방식의 차이가 중요한 부분
