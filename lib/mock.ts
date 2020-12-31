import { v4 as uuid } from 'uuid';
import { date, name, address, random, company } from 'faker';
import { randomArray } from './helper';
import { Guest, Instance } from '~/store/attendance';

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

export function fakeInstance(): Instance {
  return {
    id: uuid(),
    createdAt: date.past(),
    name: company.companyName(),
    totalGuest: 10
  };
}

export function fakeInstances(): Instance[] {
  return randomArray(fakeInstance, 3, 10);
}
