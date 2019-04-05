import {
  LOGIN,
  LOGOUT
} from "./types";

export const login = () => {
  return (dispatch) => {
    dispatch({
      type: LOGIN
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch({
      type: LOGOUT
    });
  };
};