import { IRoom } from "../../interfaces/interfaces";
import { SET_ROOMS, SET_ROOM_DATES } from "./roomsActionTypes";

export interface IRoomSearchPayload {
  checkIn: Date;
  checkOut: Date;
}

interface SetRoomAction {
  type: typeof SET_ROOMS;
  rooms: IRoom[];
}
interface SetRoomDates {
  type: typeof SET_ROOM_DATES;
  roomsDates: IRoomSearchPayload;
}

export type RoomsKnownAction = SetRoomAction | SetRoomDates;

export interface IRoomsState {
  rooms: IRoom[];
  roomsDates: {};
}

export const roomsInitialState = {
  rooms: [] as IRoom[],
  roomsDates: {} as IRoomSearchPayload,
};
