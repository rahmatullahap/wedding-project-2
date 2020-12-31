import { v4 as uuid } from 'uuid';
import { date, name, address, random } from 'faker';
import { randomArray } from './helper';
import { Guest } from '~/store/attendance';

export function fakeGuest(): Guest {
  return {
    id: uuid(),
    createdAt: date.past(),
    name: name.findName(),
    address: address.streetAddress(),
    nickname: name.lastName(),
    instance: null,
    vip: random.boolean()
  };
}

export function fakeGuests(): Guest[] {
  return randomArray(fakeGuest, 10, 20);
}
