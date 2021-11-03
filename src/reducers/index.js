import React from "react";
import { combineReducers } from "redux";
import BricoleurReducer from "./BricoleurReducer";
import ClientReducer from "./ClientReducer";
import MissionReducer from "./MissionReducer";

export default function index() {
  const reducer = combineReducers({
    BricoleurReducer,
    ClientReducer,
    MissionReducer,
  });
  return reducer;
}
