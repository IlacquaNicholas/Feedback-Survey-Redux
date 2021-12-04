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
    switch (action.type){
        case 'ADD_FEELING':
            return action.payload;
    }
    return state;
};
const understandReducer = (state = [], action) =>{
    switch (action.type) {
        case 'ADD_UNDERSTAND':
            return action.payload;
    }
    return state;
};
const supportReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_SUPPORT':
            return action.payload;
    }
    return state;
};
const commentReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
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
