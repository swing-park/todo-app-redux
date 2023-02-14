import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import toDo from "redux/modules/toDo";

const rootReducer = combineReducers({
  toDoReducer: toDo.reducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;

export type RootState = ReturnType<typeof rootReducer>;
