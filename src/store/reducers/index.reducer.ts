import { combineReducers } from "redux";
import { globalReducer, globalReducerName } from "./global.reducer";

export const rootReducer = combineReducers({
    [globalReducerName]:globalReducer
})


