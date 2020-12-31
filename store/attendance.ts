import { v4 as uuid } from 'uuid';
import { fakeGuests, fakeInstances } from '~/lib/mock';

export interface AttendanceState {
  list: Attendance[];
  guests: Guest[];
  instances: Instance[];
}

export interface Guest {
  id: string;
  createdAt: Date;
  name: string;
  nickname: string;
  address: string;
  vip: boolean;
  instance: Instance;
}

export interface Instance {
  id: string;
  createdAt: Date;
  name: string;
  totalGuest: number;
}

export interface Attendance {
  id: string;
  createdAt: Date;
  name?: string;
  address?: string;
  guest?: Guest;
  instance?: Instance;
  count: number;
  returnedAt?: Date;
}

export function state(): AttendanceState {
  return {
    list: [],
    guests: fakeGuests(),
    instances: fakeInstances()
  };
}

export interface AttendanceData {
  id?: string;
  name?: string;
  address?: string;
  guest?: Guest;
  instance?: Instance;
  count: number;
}

export const mutations = {
  /**
   * create new task
   */
  add(state: AttendanceState, data: AttendanceData) {
    const attendance: Attendance = {
      id: uuid(),
      createdAt: new Date(),
      name: data.name,
      address: data.address,
      guest: data.guest,
      instance: data.instance,
      count: data.count,
      returnedAt: null
    };
    state.list.unshift(attendance);
  },
  /**
   * return guest, when guest go home
   */
  return(state: AttendanceState, id: string) {
    const idx = state.list.findIndex((att) => att.id === id);
    state.list[idx].returnedAt = new Date();
  }
};
