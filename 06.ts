// 📌 타입 애일리어스는 intersection(&)으로 상속, 확장
type Animal = { breath: true };
type Poyouryu = Animal & { breed: true };
type Human = Poyouryu & { think: true };

const zerocho: Human = { breath: true, breed: true }; // 🚨 think 속성 빠져서 에러!

// 📌 인터페이스는 extends 로 상속, 확장
interface A_6 {
  breath: true;
}
interface B_6 extends A_6 {
  breed: true;
}
const c_6: B_6 = {
  // 🚨 상속받은 breath 속성 빠져서 에러!
  breed: true,
};

// interface는 같은 이름으로 여러번 선언가능
// 선언할때마다 합쳐진다.
// 그래서 라이브러리들이 대부분 다 interface로 만들어짐
// 그래서 우리가 맘에 안들면 남의 라이브러리 코드를 수정할 수 있다.
interface A_6_2 {
  talk: () => void;
}
interface A_6_2 {
  eat: () => void;
}
interface A_6_2 {
  shit: () => void;
}
const a_6: A_6_2 = { talk() {}, shit() {}, sleep() {} }; // 🚨 상속받은 eat() {} 빠져서 에러!

interface A_6_2 {
  sleep: () => void;
}

// 📌 타입 네이밍 룰
interface Props {}
type Type = string | number;
enum Hello {
  Left,
  Right,
}

const a_6_2: Props = {};

// 📌 interface와 type의 차이점
// 명확하게 둘이 구분되어 있짆않음
// 기능적차이가 있다해도 중요하지않음
// 표현방식의 차이가 중요한 부분
