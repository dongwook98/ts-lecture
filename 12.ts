const x: {} = 'hello';
const y: Object = 'hi'; // {}, Object 모든 타입(null과 undefined 제외)
const x_12: Object = 1;
const x_12_2: {} = true;
const x_12_3: {} = null; // {}, Object 모든 타입(null과 undefined 제외)
const x_12_4: {} = undefined; // {}, Object 모든 타입(null과 undefined 제외)
const xx: object = 'hi';
const yy: object = { hello: 'world' }; // object 지양, interface, type, class
const z: unknown = 'hi';
const z_12: unknown = {};
const z_12_2: unknown = null;
const z_12_3: unknown = undefined;

// unknown = {} | null | undefined
if (z) {
  // z가
  z; // {}타입
} else {
  z; // null, undefined
}
