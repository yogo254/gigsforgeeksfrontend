import { SET_GEEKS } from "./types";

export const setGeeks = geeks => dispatch => {
  dispatch({
    type: SET_GEEKS,
    payload: geeks
  });
};
