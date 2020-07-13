import {combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; 


import category from './categories';
import product from './products';
import cart from './cart';

let reducers = combineReducers({ product ,category, cart});
const store = () => {
    return createStore(reducers, composeWithDevTools());
}

export default store();
