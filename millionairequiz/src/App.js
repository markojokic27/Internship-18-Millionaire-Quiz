import React from 'react';
import './App.css';
import Title from './commponents/Title';
import Question from './commponents/Question';
import Answers from './commponents/Answers';
import Score from './commponents/Score/Score';

function App() {
  return (
    <div className="wrapper">
      <Title/>
      <div className="container">
        <div className="qna">
          <Question/>
          <Answers/>
        </div>
        <div className="score">
          <Score/>
        </div>
      </div>
    </div>
  );
}

export default App;
