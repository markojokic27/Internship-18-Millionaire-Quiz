import React from "react";
import "./App.css";
import Title from "./commponents/Title";
import Question from "./commponents/Question";
import Answers from "./commponents/Answers";
import Score from "./commponents/Score/Score";
import DialogProvider from "./providers/DialogProvider";
import ScoreProvider from "./providers/ScoreProvider";
import QuestionProvider from "./providers/QuestionProvider";

function App() {
  return (
    <DialogProvider>
      <ScoreProvider>
        <QuestionProvider>
          <div className="wrapper">
            <Title />
            <div className="container">
              <div className="qna">
                <Question />
                <Answers />
              </div>
              <div className="score">
                <Score />
              </div>
            </div>
          </div>
        </QuestionProvider>
      </ScoreProvider>
    </DialogProvider>
  );
}

export default App;
