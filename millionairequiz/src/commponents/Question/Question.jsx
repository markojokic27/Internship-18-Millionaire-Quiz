import { useQuestion } from '../../providers/QuestionProvider';
import classes from './index.module.css';
const Question = () => {
  const {question} = useQuestion();
  return (
    <div className={classes.question}>
      <h5>{question.text}</h5>
    </div>
  );
 };
 export default Question;