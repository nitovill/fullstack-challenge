const {
  GET_MESSAGE,
  CLEAN_MESSAGES,
  DELETE_MESSAGE,
} = require("../actiontypes");
const initialState = {
  messages: [],
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGE:
      return {
        ...state,
        messages: [action.payload, ...state.messages],
      };
    case CLEAN_MESSAGES:
      return {
        ...state,
        messages: [],
      };
    case DELETE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter((mes) => {
          return (
            mes.message !== action.payload.message ||
            mes.priority !== action.payload.priority
          );
        }),
      };
    default:
      return state;
  }
};

export default rootReducer;
