import { combineReducers } from "redux";
import authReducers from "./auth/authReducer";
import roomsReducer from "./rooms/roomsReducer";

const rootReducer = combineReducers({
  auth: authReducers,
  rooms: roomsReducer,
});

export default rootReducer;
