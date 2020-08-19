import { combineReducers } from "redux";
import alert from "./Alert";
import geeks from "./GeeksReducer";
import katas from "./KataReducer";

const rootReducer = combineReducers({
  alert,
  geeks,
  katas
});

export default rootReducer;
