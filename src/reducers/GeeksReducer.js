import { SET_GEEKS } from "../actions/types";

let initialState = [];

export default (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case SET_GEEKS:
      return payload;

    default:
      return state;
  }
};
