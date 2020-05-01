import * as Constants from "../constants/ActionTypes";

const initState = {
  currentToken: "",
  currentEmail: "",
  currentName: "",
  Members: [],
};

export const FormReducers = (state = initState, action) => {
  switch (action.type) {
    case Constants.FORM_GET_ACCOUNTS:
      return { ...state, Members: action.Members };
    case Constants.GET_USER_TOKEN:
      return { ...state, currentToken: action.currentToken };
    case Constants.GET_USER_EMAIL:
      return { ...state, currentEmail: action.currentEmail };
    case Constants.GET_USER_NAME:
      return { ...state, currentName: action.currentName };
    default:
      return state;
  }
};
