import { combineReducers } from "redux";
import countReducer from "./countReducer";
import postReducer from "./postReducer";
import weatherReducer from "./weatherReducer";
export default combineReducers({
  count: countReducer,
  post: postReducer,
  weather:weatherReducer,
});
