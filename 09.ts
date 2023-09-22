// ✨ 원칙 : any를 쓸 빠에는 unknown을 쓰자.

// 📌 any의 문제점
interface A_9 {
  talk: () => void;
}
const a_9: A_9 = {
  talk() {
    return 3;
  },
};
const b_9: any = a_9.talk();
b_9.method(); // 💩 에러 발생안함;;
// any는 존재하지않는 메서드를 막써도 포기를 해버림
// any 를 쓰면 다음부터 타입검사하는거를 포기해버린다는 뜻
// any를 사용하면 타입스크립트를 사용하는 의미가 없음

// 📌 unknown 사용법!
interface A_9_2 {
  talk: () => void;
}
const a_9_2: A_9_2 = {
  talk() {
    return 3;
  },
};
const b_9_2: unknown = a_9_2.talk();
b_9_2.talk(); // 🚨 에러 발생!
(b_9_2 as A_9_2).talk(); // 👍 unknown 타입은 as로 타입 지정해서 사용!
// unknown은 지금 당장 내가 타입을 모르겠을때 사용!
// 나중에 쓸 때 타입 지정하면 됨
// unknown을 쓰면 나중에 쓸 때 우리가 직접 타입 지정해야한다.

// 📌 unknown이 가장 많이 보이는 곳 try {} catch {}
try {
} catch (error) {
  // error가 unknown 타입으로 되어있음
  (error as Error).message;
  // as 사용해서 타입 지정해서 사용
  error as AxiosError.message; // 타입 지정해서 사용
} // Error는 타입스크립트가 제공하는 기본 에러 타입
// 에러는 어떤게 나올줄 모른다.
// 그러므로 에러는 대표적인 unknown 타입이다.

// 📌 실수로 타입을 잘못만든 경우
// as unknown as number 사용해서 강제로 변경하는 방법 밖에 없음
// 그래서 처음부터 타입을 잘 만들어야하는것이다
interface A_9_3 {
  talk: () => void;
}
const a_9_3: A_9_3 = {
  talk() {
    return 3;
  },
};
const b_9_3 = a_9_3.talk() as unknown as number;
b_9_3.toString();
// 하지만 이 코드가 안돌아가는것은 아니다.
// 타입스크립트 컴파일러는 타입 검사와 코드 변환이 서로 별개의 기능이다.
// 실제로 자바스크립트에서는 유효한 코드이다.
// npx tsc로 자바스크립트 코드로 변환해보면 타입검사에서는 에러는 나지만
// 코드로는 정확하게 잘 돌아간다.

// 📌 타입간 대입 가능 표
// [Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/f7579108-9dbe-4ec9-b9b9-8374d3f12d98/429d5b0d-76cc-4dec-b6da-3d751482a5e8/Untitled.png)
// 초록색은 x라고 봐도 된다.
// tsconfig에서 strict:true로 되어있기 때문에 초록색 체크도 x라고 봐도 된다.
function a_9_4(): void {
  return undefined;
}

function a_9_5(): void {
  return null; // 💩 에러 발생 // null은 void에 대입 불가능!
}
