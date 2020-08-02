import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {filterReducer} from "./reducers/filterReducer";
import {pizzasReducer} from "./reducers/pizzasReducer";
import {cartReducer} from "./reducers/CartReducer";


const rootReducer = combineReducers({
    filters: filterReducer,
    pizzas: pizzasReducer,
    cart: cartReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))