import { PersistGate } from "redux-persist/integration/react";
import { HashRouter } from "react-router-dom";
import ReactDOM, { render } from "react-dom";
import { store, persistor } from "./store";
import { Provider } from "react-redux";
import React from "react";
import App from "./App";
//basename="/login"
render(
  <Provider store={store}>
    <HashRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
