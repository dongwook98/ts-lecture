// 타입 추론
// 1. 타입스크립트가 정확하게 타입추론을 하였다면 건들지마라.
// 2. 타입은 최대한 좁게 적어라.
const five_2 = 5;
const six_2 = 6;

function add_2(x: number, y: number) {
  // 매개변수 타이핑 하나라도 지우면 타입추론 잘못함
  // 리턴값 타이핑 지워도 추론 잘함
  return x + y;
}
const result_2 = add_2(1, 2);

const arr_2 = ['1', '2', '3', 'hello'];
const arr2_2: Array<number> = [1, 2];
const arr3_2 = [1, 2, 'hello']; // 타입스크립트 추론 잘못하고있음. | 파이프 사용함 :(string | number)[]

const obj_2 = { age: 26, name: '강동욱' };

// never 타입
// 빈배열에 타이핑을 안하면 never로 타입 추론
try {
  const array_2 = [];
  array_2.push('hello'); // never로 추론해서 push 못함
} catch (error) {
  error;
}

// 빈배열에는 타이핑을 반드시 해주자.
try {
  const array2_2: string[] = [];
  array2_2.push('hello');
} catch (error) {
  error;
}

// | 또는
const head_2 = document.querySelector('#head');

// 느낌표(!) : null이나 undefined가 아니라고 확신할때만 사용! 하지만 사용하는거는 비추천한다.
const head2_2 = document.querySelector('#head')!;

// 누가 id가 head인 태그를 header로 수정하면 에러가 남
// <div id="header"> </div>
head2_2.innerHTML = 'hello world'; // 에러발생
console.log(head2_2);

// if로 감싸주면 head가 null이면 블록이 실행안되므로 에러가 안남!
if (head2_2) {
  head2_2.innerHTML = 'hello world';
  console.log(head2_2);
}
