import { IRootState } from "../root-states";

export const getBookingStage = (state: IRootState) => state.booking.stage;
export const getSelectedRoom = (state: IRootState) =>
  state.booking.selectedRoom;
