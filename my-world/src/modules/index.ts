import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { TodoReducer } from "modules/TodoReducer";
import { ModalReducer } from "modules/ModalReducer";
import { NoteReducer } from "modules/NoteReducer";
export const rootReducer = combineReducers({
  TodoReducer,
  ModalReducer,
  NoteReducer,
});

const persistConfig = {
  key: "root",
  storage,
  // whitelist: ["TodoReducer", "NoteReducer"],
  blacklist: ["ModalReducer"],
  //TodoReducer만 localstorage에 저장
};

export type RootState = ReturnType<typeof rootReducer>;
export default persistReducer(persistConfig, rootReducer);
