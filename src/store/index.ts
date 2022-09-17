import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import createSagaMiddleware from "redux-saga";
import RootSaga from "../sagas";
import rootReducer from "../reducers";
import { is_dev_mode } from "../config";

const sagaMiddleware = createSagaMiddleware();

let Middlewares = compose(applyMiddleware(sagaMiddleware));

if (is_dev_mode) {
  const reduxDevTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

  Middlewares = compose(applyMiddleware(sagaMiddleware), reduxDevTools);
} else {
  Middlewares = compose(applyMiddleware(sagaMiddleware));
}

export default function configureStore() {
  const store = createStore(rootReducer(), Middlewares);

  // run the saga
  sagaMiddleware.run(RootSaga);

  return store;
}
