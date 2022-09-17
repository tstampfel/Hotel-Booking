import { IUser } from "../../interfaces/interfaces";
import { SET_AUTH, SET_USER } from "./authActionTypes";

interface SetUserAction {
  type: typeof SET_USER;
  user: IUser;
}
interface SetAuthAction {
  type: typeof SET_AUTH;
  isAuth: boolean;
}

export type AuthKnownAction = SetUserAction | SetAuthAction;

export interface IAuthState {
  user: IUser;
  isAuthenticated: boolean;
}

export const authInitialState = {
  user: {},
  isAuthenticated: false,
};
