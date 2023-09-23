// 기본값 타이핑
const a_16 = (b: number = 3, c: number = 5) => {
  return '3';
};

// 객체가 기본값일 경우
const a_16_2 = (b: { children: string } = { children: 'zerocho' }) => {};

// 리액트에서 jsx 인 경우
const add_16 = <T>(x: T, y: T) => ({ x, y }); // 🚨

// 해결 방법
// → 기본값 설정!
const ad16_2 = <T = unknown>(x: T, y: T) => ({ x, y });

// → extends unknown 으로도 가능
const add16_3 = <T extends unknown>(x: T, y: T) => ({ x, y });
const result_16_3 = add16_3(1, 2);

// → , 콤마로도 가능 (비추천)
const add16_4 = <T>(x: T, y: T) => ({ x, y });
