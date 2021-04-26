import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import { NEW_MESSAGE, CONNECTED } from "./actionConstants";

const INITIAL_STATE = {
    isConnected: false, // Extra state property for the last extension activity
    messages: []
}

const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NEW_MESSAGE:
            return {...state, messages: action.payload.messages}
        case CONNECTED:
            return {...state, isConnected: true}
        default:
            return state;
    }
}

export default createStore(rootReducer, applyMiddleware(thunkMiddleware));