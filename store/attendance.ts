import { v4 as uuid } from 'uuid';
import { fakeGuests } from '~/lib/mock';

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
  name: boolean;
  totalGuest: string;
}

export interface Attendance {
  id: string;
  createdAt: Date;
  name?: string;
  address?: string;
  guest?: Guest;
  instance?: Instance;
  count: number;
  returnedDate?: Date;
}

export function state(): AttendanceState {
  return {
    list: [],
    guests: fakeGuests(),
    instances: []
  };
}

export interface AttendanceData {
  id?: string;
  name?: string;
  address?: string;
  guestId?: string;
  instanceId?: string;
  count: number;
}

export const mutations = {
  /**
   * create new task
   */
  add(state: AttendanceState, data: AttendanceData) {
    const attendance = {
      id: uuid(),
      createdAt: new Date(),
      name: data.name,
      address: data.address,
      guestId: data.guestId,
      instanceId: data.instanceId,
      count: data.count
    };
    state.list.unshift(attendance);
  },
  /**
   * return guest, when guest go home
   */
  return(state: AttendanceState, id: string) {
    const idx = state.list.findIndex((att) => att.id === id);
    state.list[idx].returnedDate = new Date();
  }
};
