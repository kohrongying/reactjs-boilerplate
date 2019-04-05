import {
  LOGIN,
  LOGOUT
} from "../actions/types";

const INITIAL_STATE = {
  isAuthenticated: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN:
    return Object.assign({}, state, { isAuthenticated: true });
  case LOGOUT:
    return Object.assign({}, state, { isAuthenticated: false });
  default:
    return state;
  }
};