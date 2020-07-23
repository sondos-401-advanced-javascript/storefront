import {combineReducers, createStore ,applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; 

import ReduxThunk from 'redux-thunk';

import category from './categories';
import product from './products';
import cart from './cart';
import data from './reducer';

let reducers = combineReducers({ product ,category, cart ,data});
const store = () => {
    return createStore(reducers, composeWithDevTools(applyMiddleware(ReduxThunk)));
}

export default store();
