import {SIGN_IN, SIGN_OUT, SIGN_UP} from "../actions/actionTypes"

export function userReducer(state = {isAuth: false, nick: ""}, action) {
    switch (action.type) {
        case SIGN_IN:
            return {
                isAuth: true,
                nick: action.nick
            };
        case SIGN_OUT:
            return {
                isAuth: false
            };
        default:
            return {
                isAuth: true,
                nick: action.nick
            };
    }
}