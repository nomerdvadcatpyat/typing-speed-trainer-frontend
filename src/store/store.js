import {createStore, compose, applyMiddleware} from "redux";
import {rootReducer} from "./reducers/rootReducer";
import {loggerMiddleware} from "./middlewares/loggerMiddleware";
import {socketMiddleware} from "./middlewares/socketMiddleware";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(loggerMiddleware, socketMiddleware)) // внутрь кидать applyMiddleware когда понадобятся
);
