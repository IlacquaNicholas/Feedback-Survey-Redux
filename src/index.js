import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
//Redux
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const feelingFeedback = (state = [], action) =>{
    if (action.payload === 'ADD_FEELING'){
        console.log(action);
        return action.payload
    }
}


//This is the Store for the reducers 
const storeInstance = createStore(
    combineReducers({
        feelingFeedback
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
