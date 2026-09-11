import { useState } from "react";


const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Display = ({text}) => <h2>{text}</h2>

const StatisticLine = (props) => {
  return(
    <div>
      <p>{props.text} {props.value}</p>
    </div>
  )
}

const Statistics = ({good, neutral, bad, all}) => {
  
  let average = all === 0 ? 0 :(good - bad) / all;
  let positive = all === 0 ? 0 :(good / all) * 100

  if(all === 0){
    return <div>No feedback given</div>
  }

  return(
   < div>
    <StatisticLine text='good' value={good} />
    <StatisticLine text='neutral' value={neutral} />
    <StatisticLine text='bad' value={bad} />
    <StatisticLine text='all' value={all} />
    <StatisticLine text='average' value={average} />
    <StatisticLine text='positive' value={positive} />
   </div>
  

)}
    
  
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const increaseGood = () => { 
    const updateGood = good + 1
    setGood(updateGood)
    setAll(updateGood + neutral + bad)
  }
  const increaseNeutral = () => {
    const updateNeutral = neutral + 1;
    setNeutral(updateNeutral)
    setAll(good + updateNeutral + bad)
  }

  const increaseBad = () => {
    const updateBad = bad + 1
    setBad(updateBad)
    setAll(good + neutral + updateBad)
  }

  
  return(
    <div>
      <Display text={'give feedback'} />

      <Button onClick={increaseGood} text='good' />
      <Button onClick={increaseNeutral} text='neutral' />
      <Button onClick={increaseBad} text='bad' />

      <Display text={'statistics'} />

      <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
      

    </div>
  )
}

export default App;