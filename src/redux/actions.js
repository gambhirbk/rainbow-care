import { NEW_MESSAGE, CONNECTED } from "./actionConstants";
import { joinChat, sendMessage } from "../client";

// Action creator functions - use async actions to communicate with server
// Replaces the direct call to joinChat in App
export const connectToChat = username => {
    return dispatch => joinChat(username);
}

// Replaces the direct call to sendMessage in Form
export const sendToChat = msg =>  {
    return  dispatch => sendMessage(msg);
}

export const isConnected = () => ({type: CONNECTED})

export const newMessage = messages => ({
    type: NEW_MESSAGE,
    payload: {
        messages
    }
})