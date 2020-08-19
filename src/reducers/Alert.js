import { SET_ALERT, REMOVE_ALERT } from "../actions/types";

let initialState = [];

export default (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter(s => s.id !== payload);
    default:
      return state;
  }
};
