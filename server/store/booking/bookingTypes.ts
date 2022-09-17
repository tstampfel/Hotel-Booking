import { IRoom } from "../../interfaces/interfaces";
import { SET_BOOKING_STAGE, SET_SELECTED_ROOM } from "./bookingActionTypes";

export interface IRoomSearchPayload {
  checkIn: Date;
  checkOut: Date;
}

interface SetBookingStage {
  type: typeof SET_BOOKING_STAGE;
  stage: "select_room" | "personal_info" | "payment_info" | "booking_review";
}
interface SetSelectedRoom {
  type: typeof SET_SELECTED_ROOM;
  selectedRoom: IRoom;
}

export type BookingKnownAction = SetBookingStage | SetSelectedRoom;

export interface IBookingState {
  stage: "select_room" | "personal_info" | "payment_info" | "booking_review";
  selectedRoom: IRoom;
}

export const bookingInitialState = {
  stage: "select_room",
  selectedRoom: {} as IRoom,
};
