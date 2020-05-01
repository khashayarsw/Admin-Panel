import { persistReducer, persistStore } from "redux-persist";
//Set local storage az default storage:
import storage from "redux-persist/lib/storage";
import { FormReducers } from "./FormReducers";
import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["FormReducers"],
};

const RootReducer = combineReducers({
  FormReducers,
});

export default persistReducer(persistConfig, RootReducer);
