// {} 타입과 Object 타입
// {} 타입과 Object 타입은 null과 undefined를 제외한 모든 타입이다.
const x_12: {} = 'hello';
const x2_12: Object = 'hello';

// object 타입
// 실제 객체 타입은 object이다. 하지만 우리는 객체 타이핑 할 때 object 지양하고 interface, type alias, class를 사용하자.
const x3_12: object = { hello: 'world' };
const x4_12: object = 'hello';

// unknown 타입
// unknown 타입도 모든 값을 받을 수 있다. any 타입과 마찬가지로 모든 값을 받을 수 있는데 any 보다 좀 더 낫다.
// 왜냐하면 any 타입은 타입 추론을 포기한다는 것이고 unknown 타입은 우리가 타입을 나중에 한번 직접 정해줘야 된다.
// 4.8버전부터는 unknown = {} | null | undefined 이 공식이 성립한다.
const z_12: unknown = 'hi';

// unknown = {} | null | undefined
if (z_12) {
  z_12; // z가 {} 타입이라고 추론한다.
} else {
  z_12; // z가 unknown 타입이라고 추론한다.
}
