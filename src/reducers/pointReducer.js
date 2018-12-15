import {ADD_POINT} from "../actions/actionTypes"

export function pointReducer(state = {x: 0,y: 0,r: 0}, action) {
    switch (action.type) {
        case ADD_POINT:
            return {
                x: action.x,
                y: action.y,
                r: action.r
            };
        default:
            return {}
    }
}