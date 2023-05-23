import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { TodoReducer } from "modules/TodoReducer";
import { ModalReducer } from "modules/ModalReducer";
import { NoteReducer } from "modules/NoteReducer";
import { CodeReducer } from "modules/CodeReducer";
import { SettingReducer } from "modules/SettingReducer";
import { ShortcutReducer } from "modules/ShortcutReducer";
export const rootReducer = combineReducers({
  TodoReducer,
  ModalReducer,
  NoteReducer,
  CodeReducer,
  SettingReducer,
  ShortcutReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["ModalReducer"],
};

export type RootState = ReturnType<typeof rootReducer>;
export default persistReducer(persistConfig, rootReducer);
