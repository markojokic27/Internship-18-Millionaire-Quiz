import { useScore } from "../../providers/ScoreProvider";
import Steps from "./Steps";

const Score = () => {

  const {score} = useScore();

  return <div>
    <div>
    <button >50:50</button>
    <button>Phone</button>
    <button>Public</button>
    </div>
    <div>
    <p>Your Score:</p>
    <div> ${score}</div>
    </div>
  <Steps/>
  </div>
}

export default Score;