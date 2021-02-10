import { combineReducers } from "redux";
import authReducers from "./auth/authReducer";
import bookingReducer from "./booking/bookingReducer";
import roomsReducer from "./rooms/roomsReducer";

const rootReducer = combineReducers({
  auth: authReducers,
  rooms: roomsReducer,
  booking: bookingReducer,
});

export default rootReducer;
