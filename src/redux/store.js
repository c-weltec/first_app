import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { counterReducer } from "./reducers/counterReducer";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas";
const sagaMiddleware = createSagaMiddleware();

const composedEnhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));
//   applyMiddleware(thunkMiddleware)
// other store enhancers if any

const store = createStore(
  combineReducers({
    counter: counterReducer,
  }),
  composedEnhancer
);
export default store;

sagaMiddleware.run(rootSaga);
