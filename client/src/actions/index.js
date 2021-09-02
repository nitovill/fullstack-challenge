import axios from "axios";
const { GET_MESSAGE } = require("../actiontypes");

export function getMessage() {
  return function (dispatch) {
    return axios("http://localhost:3001/message")
      .then((res) => {
        const resp = [];
        resp.push(res.data.message);
        resp.push(res.data.priority);
        dispatch({ type: GET_MESSAGE, payload: resp });
      })
      .catch((e) => console.log(e));
  };
}
