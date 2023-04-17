import React from "react";
import ReactDOM from "react-dom/client";
import "index.scss";
import App from "components/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "modules/index";
const store = createStore(rootReducer);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
