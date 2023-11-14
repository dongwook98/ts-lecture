// enum
// js 변환시 사라진다.
// 값들을 하나로 묶으고 싶을 때 사용
const enum EDirection_4 {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}

// 값 지정도 가능
// 문자열도 가능
const enum EDirection2_4 {
  Up2 = '1',
  Down2 = 3,
  Left2 = 4,
  Right2 = 5,
}

const a_4 = EDirection_4.Up;
const c_4 = EDirection_4.Left;

// enum 대신 객체로 묶을 수 있다.
// js 변환 시 안사라진다. 이 방법을 추천!
const ODirection_4 = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;

// 남겨야할지 안남겨야할지 모르겠다면 남겨라.

// as const 지우면 타입추론을 제대로 못함
// number라고 널널하게 하고 있다.
const ODirection2_4 = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
};

// as const 사용 시 readonly도 붙어서 수정못하게함! 엄격하게 타이핑해줌.
const ODirection3_4 = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;

// enum 쓰는 코드
// enum은 직접 타입으로 사용 쓸 수 있다.
function walk_4(dir: EDirection_4) {}

walk_4(EDirection_4.Left);

const obj_4 = { a: '123', b: 'hello', c: 'world' } as const; // 자바스크립트 값
// 자바스크립트 값은 타입으로 사용할 수 없다. 그래서 앞에 typeof 키워드 붙여줌
// 여기서 keyof를 사용해 객체의 키 값들을 타입으로 사용하는것!
type Key_4 = keyof typeof obj_4;
type Value_4 = (typeof obj_4)[keyof typeof obj_4]; // value 들만 가져오는것!

// enum 안쓰는 코드 (일반 객체를 타입으로 사용)
type Direction_4 = (typeof ODirection3_4)[keyof typeof ODirection3_4];
function run_4(dir: Direction_4) {}

run_4(ODirection3_4.Right);
