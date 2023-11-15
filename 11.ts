// 커스텀 타입 가드(is, 형식 조건자)
// 리턴 타입 자리에 is가 있으면 커스텀 타입 가드 함수이다.
// 커스텀 타입 가드 함수는 if문 안에 써서 타입스크립트한테 정확한 타입을 알려준다.
// 대신에 타입 판별 하는 코드는 우리가 직접 코딩을 해야한다.
interface Cat_11 {
  meow: number;
}
interface Dog_11 {
  bow: number;
}
// 커스텀 타입 가드 함수
function catOrDog_11(a: Cat_11 | Dog_11): a is Dog_11 {
  // 타입 판별을 여러분이 직접 만드세요.
  if ((a as Cat_11).meow) {
    return false;
  }
  return true;
}
// 타입을 구분해주는 커스텀 함수를 여러분이 직접 만들 수 있어요.
function pet_11(a: Cat_11 | Dog_11) {
  if (catOrDog_11(a)) {
    // catOrDog(a)가 true 라면 Dog 이므로 .bow 메서드가 동작 할 수 있음
    console.log(a.bow);
  }
  if ('meow' in a) {
    console.log(a.meow);
  }
}
// 지금 까지 우리는 typeof, instanceof, in, Array.isArray
// 이런 자바스크립트 문법을 활용해서 매개변수가 무슨 타입 인지를 찾았다.
// 이런게 아니라 우리가 커스텀하게 함수를 만들어줄 수 있다. -> 커스텀 타입 가드 함수
// : a is Dog 부분이 없으면 if 문 안에 들어 갔을 때 구분을 못한다.
// 그래서 is 라는게 꼭 있어야지만 타입스크립트가 if 문 안에서 정확하게 구분한다.

// 기본지식 (프로미스)
// PromiseSettledResult PromiseRejectedResult(실패) PromiseFulfilledResult(성공)
// Promise → Pending → Settled(Fullfilled, Rejected)

// is 실전 예제
const promises_11 = await Promise.allSettled([Promise.resolve('a'), Promise.resolve('b')]);
const errors_11 = promises_11.filter((a) => true); // errors 타입이 PromiseSettledResult로 하고 있음

export {};
// 우리는 errors에 실패한거를 모아놓고 싶다.
// errors 타입이 PromiseRejectedResult되야 하는데 PromiseSettledResult로 추론 하고 있다.
// 왜그러냐면 위 코드만 보고는 성공했는지 실패했는지 모르기 때문이다.
// 그래서 타입스크립트는 모든 가능성을 고려해서 타입을 PromiseSettledResult 라고 넓게 추론하고 있다.

const promises2_11 = await Promise.allSettled([Promise.resolve('a'), Promise.resolve('b')]);
const errors2_11 = promises2_11.filter((promise) => promise.status === 'rejected'); // errors_11 타입이 PromiseSettledResult로 하고 있음

export {};
// 실제로 실패해놓은것들만 모아놓은 코드로 바꾸어줘도
// errors_11 는 PromiseSettledResult 라고 추론하고 있다.
// 타입스크립트가 타입 추론을 잘못하고 있다. 그럴 때 쓰는게 바로 is 이다.

// 커스텀 타입 가드 함수를 만들어주고 넣어주면
// 타입스크립트가 올바르게 PromiseRejectedResult 라고 추론한다.
// 사실은 (promise) => promise.status === 'rejected' 이 함수와
// const isRejected = (
//   input: PromiseSettledResult<unknown>
// ): input is PromiseRejectedResult => {
//   return input.status === 'rejected';
// };
// 이 코드와 다른건 리턴값 타이핑 is 부분 밖에 없다.
const isRejected = (input: PromiseSettledResult<unknown>): input is PromiseRejectedResult => {
  return input.status === 'rejected';
};
const isFulfilled = <T>(input: PromiseSettledResult<T>): input is PromiseFulfilledResult<T> => {
  return input.status === 'fulfilled';
};

const promises3_11 = await Promise.allSettled([Promise.resolve('a'), Promise.resolve('b')]);
const errors3_11 = promises3_11.filter(isRejected); // errors2_11를 PromiseRejectedResult 라고 추론 하고 있음

export {};
