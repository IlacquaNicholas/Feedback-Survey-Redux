import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import './App.css';
import FeelingFeedback from '../FeelingFeedback/FeelingFeedback';



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
        <Route exact path="/ReviewFeedback">
          <ReviewFeedback />
        </Route>
      </Router>
    </div>
  );
}

export default App;
