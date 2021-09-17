import { combineReducers } from "redux";
import movieReducers from "./movieReducers";

const allReducers = combineReducers({
  movieReducers: movieReducers,
});
export default allReducers;
