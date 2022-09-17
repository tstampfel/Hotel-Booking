import { authInitialState, IAuthState } from "./auth/authTypes";
import { bookingInitialState, IBookingState } from "./booking/bookingTypes";
import { IRoomsState, roomsInitialState } from "./rooms/roomsTypes";

// Practice purposese only not neccessary when apollo client is used.
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
