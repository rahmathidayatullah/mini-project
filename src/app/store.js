import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import authReducer from "features/Auth/reducer";
import todosReducer from "features/Todos/reducer";

import thunk from "redux-thunk";

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
  auth: authReducer,
  todos: todosReducer,
});

const store = createStore(
  rootReducers,
  composerEnhancer(applyMiddleware(thunk))
);

export default store;
