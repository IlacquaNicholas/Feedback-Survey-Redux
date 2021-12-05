import axios from 'axios';
import React from 'react';
import { HashRouter as Router, Route} from "react-router-dom";
import './App.css';
import FeelingFeedback from '../FeelingFeedback/FeelingFeedback';
import UnderStandingFeedback from '../UnderstandingFeedback/UnderstandingFeedback';
import SupportFeedback from '../SupportFeedback/SupportFeedback';
import CommentFeedback from '../CommentFeedback/CommentFeedback';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import ThankyouPage from '../ThankyouPage/ThankyouPage';




function App() {
  return (
    <div className='App'>
      <Router>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
        
          <li>In the first three pages please leave a rating from 1-5,
            5 meaning great and 1 meaning not great and the fourth page you will leave a comment.</li>
          <li>The last page will give you a review of your results</li>
      </header>
        <Route exact path="/">
         <FeelingFeedback />
        </Route>
        <Route exact path="/understanding">
          <UnderStandingFeedback />
        </Route>
        <Route exact path="/supported">
          <SupportFeedback />
        </Route>
        <Route exact path="/comments">
          <CommentFeedback />
        </Route>
        <Route exact path="/review">
          <ReviewFeedback />
        </Route>
        <Route exact path="/thankyou">
          <ThankyouPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
