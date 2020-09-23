import { createStore, combineReducers } from "redux";
import reducer from "./reducer/reducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: hardSet,
  //   blacklist: ["auth"],
};

const rootreducer = combineReducers({ todo: reducer });

let preducer = persistReducer(persistConfig, rootreducer);
let store = createStore(preducer);

const persistor = persistStore(store);
export { persistor, store };
