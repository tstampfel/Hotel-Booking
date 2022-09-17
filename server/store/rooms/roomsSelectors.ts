import { IRootState } from "../root-states";

export const getAvailableRooms = (state: IRootState) => state.rooms.rooms;
