import React from "react";
import ReactDOM from "react-dom/client";
import "index.scss";
import App from "components/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "modules/index";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

//redux & redux persist
const store = createStore(rootReducer);
const persistor = persistStore(store);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <App />
      </Provider>
    </PersistGate>
  </React.StrictMode>
);
