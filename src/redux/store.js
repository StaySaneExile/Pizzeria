import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {filterReducer} from "./reducers/filterReducer";
import {pizzasReducer} from "./reducers/pizzasReducer";


const rootReducer = combineReducers({
    filterReducer: filterReducer,
    pizzasReducer: pizzasReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))