// 기본값 타이핑
const a_16 = (b: number = 3, c: number = 5) => {
  return '3';
};

// 객체가 기본값일 경우
const a2_16 = (b: { children: string } = { children: 'zerocho' }) => {};

// 리액트에서 jsx 인 경우
const add_16 = <T>(x: T, y: T) => ({ x, y }); // 🚨

// 해결 방법
// 1. 기본값 설정!
const add2_16 = <T = unknown>(x: T, y: T) => ({ x, y });

// 2. extends unknown 으로도 가능
const add3_16 = <T extends unknown>(x: T, y: T) => ({ x, y });
const result3_16 = add3_16(1, 2);

// 3. 콤마로도 가능 (비추천)
const add4_16 = <T>(x: T, y: T) => ({ x, y });
