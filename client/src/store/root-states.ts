import { authInitialState, IAuthState } from "./auth/authTypes";
import { IRoomsState, roomsInitialState } from "./rooms/roomsTypes";

export interface IRootState {
  auth: IAuthState;
  rooms: IRoomsState;
}

export const rootStates = {
  auth: authInitialState,
  rooms: roomsInitialState,
};
