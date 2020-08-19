import { SET_KATAS } from "../actions/types";

let initialState = [];

export default (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case SET_KATAS:
      return payload;

    default:
      return state;
  }
};
