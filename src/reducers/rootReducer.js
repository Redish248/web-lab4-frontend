import {combineReducers} from "redux";
import {pointReducer} from "./pointReducer";
import {userReducer} from "./userReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    point: pointReducer
});