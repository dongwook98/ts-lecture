"use strict";
// 변수 타이핑
const a = '5';
const b = 5;
const c = true;
const d = undefined;
const e = null;
// const f: any = true; ❌ any 타입은 쓰지않아야한다.
// const f: symbol = Symbol.for('abc');
// const g: bigint = 1000000n;
// 함수 타이핑에는 3가지 방식이 있다.
// 1. 첫번째 방식 (매개변수와 반환값을 따로따로 타이핑한 것)
function add(x, y) {
    return x + y;
}
const add2 = (x, y) => x + y;
// 2. 두번째 방식 (함수를 먼저 타이핑한 후에 값을 넣은 것)
// 2-1. 인라인
const minus = (x, y) => x - y;
const minus2 = (x, y) => x - y;
const multiply = (x, y) => x * y;
