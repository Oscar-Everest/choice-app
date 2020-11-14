import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import { contentListReducer } from "./reducer/contentReducers";
import thunk from "redux-thunk";

const initialState = {};
const reducer = combineReducers({
    contentList: contentListReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;