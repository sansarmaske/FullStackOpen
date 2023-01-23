import { useState } from "react";

import React from 'react'
const Statistics = ({good,neutral,bad}) => {
  if(good+neutral+bad <= 0)
    return(<>No feedback given</>)
  return(
    <>
      <StatisticsLine text="good" value={good}></StatisticsLine>
      <StatisticsLine text="neutral" value={neutral}></StatisticsLine>
      <StatisticsLine text="bad" value={bad}></StatisticsLine>
      <StatisticsLine text="all" value={good+neutral+bad}></StatisticsLine>
      <StatisticsLine text="average" value={(good-bad)/(good+neutral+bad)}></StatisticsLine>
      <StatisticsLine text="positive" value= {`${(good/(good+neutral+bad))*100}%` }></StatisticsLine>
    </>
  )
}

const StatisticsLine = ({text, value}) => {
  return (
    <p>{text} {value}</p>
  )
}

export const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick}>{text}</button>
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
      <Button text="good" onClick={() => setGood(good+1)}></Button>
      <Button text="neutral" onClick={() => setNeutral(neutral+1)}></Button>
      <Button text="bad" onClick={() => setBad(bad+1)}></Button>
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    
    </div>
  )
}


export default App;
