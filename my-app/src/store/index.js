import {combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; 


import product from './categories';

let reducers = combineReducers({ product });



const store = () => {
    return createStore(reducers, composeWithDevTools());
}

export default store();
