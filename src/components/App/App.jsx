import axios from 'axios';
import React from 'react';
import { HashRouter as Router, Route} from "react-router-dom";
import { useDispatch } from 'react-redux';
import './App.css';
import FeelingFeedback from '../FeelingFeedback/FeelingFeedback';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';



function App() {
  const dispatch = useDispatch();

  

  return (
    <div className='App'>
      <Router>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
        <Route exact path="/">
         <FeelingFeedback />
        </Route>
        <Route exact path="/understanding">
          <ReviewFeedback />
        </Route>
        <Route exact path="/supported">
          <ReviewFeedback />
        </Route>
        <Route exact path="/comments">
          <ReviewFeedback />
        </Route>
        <Route exact path="/review">
          <ReviewFeedback />
        </Route>
      </Router>
    </div>
  );
}

export default App;
