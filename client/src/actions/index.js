import axios from "axios";
const {
  GET_MESSAGE,
  CLEAN_MESSAGES,
  DELETE_MESSAGE,
} = require("../actiontypes");

export function getMessage() {
  return function (dispatch) {
    return axios("http://localhost:3001/message")
      .then((res) => {
        dispatch({ type: GET_MESSAGE, payload: res.data });
      })
      .catch((e) => {
        dispatch({ type: GET_MESSAGE, payload: "error" });
      });
  };
}
export function cleanMessages() {
  return function (dispatch) {
    dispatch({ type: CLEAN_MESSAGES });
  };
}
export function deleteMessage(message) {
  console.log(message);
  return function (dispatch) {
    dispatch({ type: DELETE_MESSAGE, payload: message });
  };
}
