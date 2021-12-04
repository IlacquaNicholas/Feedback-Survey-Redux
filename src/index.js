import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
//Redux
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const feelingReducer = (state = [], action) =>{
    if (action.payload === 'ADD_FEELING'){
        console.log(action);
        return action.payload;
    }
    return state;
};
const understandReducer = (state = [], action) =>{
    if (action.payload === 'ADD_UNDERSTAND') {
        console.log(action);
        return action.payload;
    }
    return state;
};
const supportReducer = (state = [], action) => {
    if (action.payload === 'ADD_SUPPORT') {
        console.log(action);
        return action.payload;
    }
    return state;
};
const commentReducer = (state = [], action) => {
    if (action.payload === 'ADD_COMMENT') {
        console.log(action);
        return action.payload;
    }
    return state;
};




//This is the Store for the reducers 
const storeInstance = createStore(
    combineReducers({
        feelingReducer,
        understandReducer,
        supportReducer,
        commentReducer
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
