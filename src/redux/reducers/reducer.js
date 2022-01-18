import cityReducer from "./cityReducer";
import favoriteReducer from "./favoriteReducer";
import { combineReducers } from "redux";
import searchReducer from "./searchReducer";

const allReducers=combineReducers({
  cityReducer,
  searchReducer,
  favoriteReducer,
})

export default allReducers