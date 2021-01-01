import { v4 as uuid } from 'uuid';
import { fakeGuests, fakeInstances } from '~/lib/mock';

export interface AttendanceState {
  list: Attendance[];
  guests: Guest[];
  instances: Instance[];
}

export interface Guest {
  id?: string;
  createdAt?: Date;
  name: string;
  nickname?: string;
  address: string;
  vip: boolean;
  instance?: Instance;
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
  souvenirNo?: number;
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
  souvenirNo?: number;
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
      returnedAt: null,
      souvenirNo: data.souvenirNo
    };
    state.list.unshift(attendance);
  },
  /**
   * return guest, when guest go home
   */
  return(state: AttendanceState, id: string) {
    const idx = state.list.findIndex((att) => att.id === id);
    state.list[idx].returnedAt = new Date();
  },
  /**
   * return guest by souvenir no, when guest go home
   */
  returnBySouvenir(state: AttendanceState, no: number) {
    const idx = state.list.findIndex((att) => att.souvenirNo === no);
    state.list[idx].returnedAt = new Date();
  }
};
