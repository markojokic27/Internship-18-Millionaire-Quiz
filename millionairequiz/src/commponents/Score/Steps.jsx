import { useScore } from "../../providers/ScoreProvider";
import { steps } from "../Answers/utilis";
import clsx from 'clsx';
const Steps = () => {
  const { score } = useScore();
  return <div >
    {steps.map((step, i) => {
      return <div key={i} 
      //className={clsx({
      //   []: true,
      //   []: score===i
      // })}
      >
        <div >{i + 1}</div>
        <div >{step}</div>
      </div>
    })}
  </div>
}
export default Steps;