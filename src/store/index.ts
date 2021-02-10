import { createStore } from "redux";
import rootReducer from "./root-reducers";
import { rootStates } from "./root-states";
import { devToolsEnhancer } from 'redux-devtools-extension'

const store = createStore(rootReducer, rootStates, devToolsEnhancer({}));

export default store;
