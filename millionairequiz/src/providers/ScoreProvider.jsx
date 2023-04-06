import { createContext, useState, useContext } from "react";
const defaultContext = {
  score: 0,
  setScore: (a) => a+1,
}
export const ScoreContext = createContext(defaultContext);
const ScoreProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  return (
    <ScoreContext.Provider value={{ score, setScore }}>
      {children}
    </ScoreContext.Provider>
  )
}
export const useScore = () => useContext(ScoreContext);
export default ScoreProvider;