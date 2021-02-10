/* eslint-disable import/no-anonymous-default-export */
import { SET_ROOMS, SET_ROOM_DATES } from "./roomsActionTypes";
import { roomsInitialState, RoomsKnownAction } from "./roomsTypes";

export default (state = roomsInitialState, action: RoomsKnownAction) => {
  switch (action.type) {
    case SET_ROOMS:
      return { ...state, rooms: action.rooms };
    case SET_ROOM_DATES:
      return { ...state, roomsDates: action.roomsDates };
    default:
      return state;
  }
};
