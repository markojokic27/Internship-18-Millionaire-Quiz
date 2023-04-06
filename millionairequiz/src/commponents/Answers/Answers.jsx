import { Button } from "@mui/material";
import { DIALOG, useQuestion } from "../../providers/QuestionProvider";
import { letters } from "./utilis";
import classes from "./index.module.css";
import { useDialog } from "../../providers/DialogProvider";
import { useScore } from "../../providers/ScoreProvider";
const Answers = () => {
  const { activeDialog, open } = useDialog();
  const { question, setQuestion } = useQuestion();
  const { score, setScore } = useScore();

  const check = (text) => {
    if (text !== question.answer) {
      setTimeout(() => {
        open(DIALOG.FINISH_DIALOG, {});}, 100);
    } else setScore();
  };
  const handleClick = (e) => {
    open(DIALOG.CONFIRM_DIALOG, { onSubmit: check, text: e.target.innerText });
  };

  return (
    <div className={classes.wrapper}>
      {question.answers.map((answer, index) => {
        return (
          <Button className={classes.button} onClick={handleClick}>
            {letters[index]}
            {answer}{" "}
          </Button>
        );
      })}
    </div>
  );
};
export default Answers;
