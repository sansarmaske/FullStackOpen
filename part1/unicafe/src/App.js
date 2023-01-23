import { useState } from "react";

import React from 'react'
const Statistics = ({good,neutral,bad}) => {
  if(good+neutral+bad <= 0)
    return(<>No feedback given</>)
  return(
    <>
      
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good+neutral+bad}</p>
      <p>average {(good-bad)/(good+neutral+bad)}</p>
      <p>positive {(good/(good+neutral+bad))*100} %</p>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <h2> give feedback</h2>
      <button onClick={() => setGood(good+1)}>good</button>
      <button onClick={() => setNeutral(neutral+1)}>neutral</button>
      <button onClick={() => setBad(bad+1)}>bad</button>
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    
    </div>
  )
}


export default App;
