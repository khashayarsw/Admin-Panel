import { createStore, applyMiddleware, compose } from "redux";
// let the browser cache the store now depending on certian configuration :
import { persistStore } from "redux-persist";
import RootReducer from "./reducers";
import thunk from "redux-thunk";

const devTools =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    : (f) => f;

const store = createStore(
  RootReducer,
  compose(applyMiddleware(thunk), devTools)
);
const persistor = persistStore(store);

export { store, persistor };
