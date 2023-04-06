import { createContext, useState, useContext } from "react";
import questions from "../data/questions.json";

export const DIALOG = {
  CONFIRM_DIALOG: "CONFIRM",
  PHONE_DIALOG: "PHONE",
  PUBLIC_DIALOG: "PUBLIC",
};
const defaultContext = {
  question: {
    text: "",
    answers: ["", "", "", ""],
    answer: "",
  },
  setQuestion: () => {},
};

export const QuestionContext = createContext(defaultContext);

const QuestionProvider = ({ children }) => {
  const [question, setQuestion] = useState(defaultContext.question);
  useState(() => {
    const randomNum = Math.floor(Math.random() * 15) + 1;
    setQuestion(questions[randomNum]);
  }, []);

  console.log(question);
  return (
    <QuestionContext.Provider value={{ question, setQuestion }}>
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestion = () => useContext(QuestionContext);
export default QuestionProvider;
