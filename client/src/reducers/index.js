const { GET_MESSAGE } = require("../actiontypes");
const initialState = {
  message: [],
  messages: [],
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
