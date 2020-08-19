import { SET_KATAS } from "./types";

export const setKatas = kata => dispatch => {
  dispatch({
    type: SET_KATAS,
    payload: kata
  });
};
