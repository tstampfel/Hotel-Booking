import { authInitialState, IAuthState } from "./auth/authTypes";
import { bookingInitialState, IBookingState } from "./booking/bookingTypes";
import { IRoomsState, roomsInitialState } from "./rooms/roomsTypes";

export interface IRootState {
  auth: IAuthState;
  rooms: IRoomsState;
  booking: IBookingState;
}

export const rootStates = {
  auth: authInitialState,
  rooms: roomsInitialState,
  booking: bookingInitialState,
};
