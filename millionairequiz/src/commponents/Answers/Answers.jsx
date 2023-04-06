import { Button } from "@mui/material";
import { useQuestion } from "../../providers/QuestionProvider";
import { letters } from "./utilis";
import classes from './index.module.css';
const Answers = () => {
  const {question} = useQuestion();
  console.log(question)
  return <div className={classes.wrapper} >
    {
      question.answers.map((answer, index) => {
        return <Button className={classes.button}>{letters[index]}{answer}</Button>
      })
    }
  </div>
 }
export default Answers;

