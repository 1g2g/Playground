import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage/session";
import { persistReducer } from "redux-persist";
import { TodoReducer } from "./TodoReducer";

export const rootReducer = combineReducers({ TodoReducer });

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["TodoReducer"],
  //TodoReducer만 localstorage에 저장
};

export type RootState = ReturnType<typeof rootReducer>;
export default persistReducer(persistConfig, rootReducer);
