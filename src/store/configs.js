import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import  { mainReducer }  from '../reducer/index';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
         ...mainReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
);

export default  store;