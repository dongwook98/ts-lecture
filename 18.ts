// filter 제네릭 분석
interface Array<T> {
  filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
  filter<S extends T>(
    predicate: (value: number, index: number, array: number[]) => value is number,
    thisArg?: any
  ): number[];
  filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
  filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
}
const filtered_18 = [1, 2, 3, 4, 5].filter((value) => value % 2);
const filtered2_18 = ['1', 2, '3', 4, '5'].filter((value) => typeof value === 'string'); // ['1', '3', '5'] string[]
