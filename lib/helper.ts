import { random } from 'faker';

export function randomArray<T>(
  iterator: () => T,
  maxLength: number = 11,
  minLength: number = 1
): T[] {
  const length = random.number({ min: minLength, max: maxLength });
  const values: T[] = [];
  for (let i = 0; i < length; i++) {
    values.push(iterator());
    if (values.includes(iterator())) {
      values.pop();
      i--;
    }
  }
  return values;
}
