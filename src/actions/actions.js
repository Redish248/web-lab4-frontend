import {SIGN_IN, SIGN_OUT, SIGN_UP, ADD_POINT} from "./actionTypes"

export const signUp = (nick, password) => ({
    type: SIGN_UP,
    nick,
    password
});

export const signOut = (nick, password) => ({
    type: SIGN_OUT,
    nick,
    password
});

export const signIn = (nick, password) => ({
    type: SIGN_IN,
    nick,
    password
});

export const addPoint = (x,y,r) => ({
    type: ADD_POINT,
    x,
    y,
    r
});