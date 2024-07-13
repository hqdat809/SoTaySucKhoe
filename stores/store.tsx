// src/store.js
import AsyncStorage from "@react-native-async-storage/async-storage";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers"; // Your root reducer
import rootSaga from "./sagas"; // Your root saga

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  const persistor = persistStore(store);
  return { store, persistor };
};

export default configureStore;
