/* eslint-disable import/no-anonymous-default-export */
import { SET_AUTH, SET_USER } from "./authActionTypes";
import { AuthKnownAction, authInitialState } from "./authTypes";

export default (state = authInitialState, action: AuthKnownAction) => {
    switch (action.type) {
        case SET_AUTH:
            return {...state, isAuthenticated: action.isAuth}
        case SET_USER:
            return {...state, user: action.user}
        default:
           return state;
    }
}