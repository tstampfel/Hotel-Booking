/* eslint-disable import/no-anonymous-default-export */
import { SET_BOOKING_STAGE, SET_SELECTED_ROOM } from "./bookingActionTypes";
import { BookingKnownAction, bookingInitialState } from "./bookingTypes";

export default (state = bookingInitialState, action: BookingKnownAction) => {
  switch (action.type) {
    case SET_BOOKING_STAGE:
      return { ...state, stage: action.stage };
    case SET_SELECTED_ROOM:
      return { ...state, selectedRoom: action.selectedRoom };
    default:
      return state;
  }
};
