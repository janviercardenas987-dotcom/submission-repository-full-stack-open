import { useState } from "react";


const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Display = ({text}) => <h2>{text}</h2>

const Statistics = ({name, count}) => <p>{name} {count}</p>
    
  
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

  let average = all === 0 ? 0 :(good - bad) / all;
  let positive = all === 0 ? 0 :(good / all) * 100

  return(
    <div>
      <Display text={'give feedback'} />

      <Button onClick={increaseGood} text='good' />
      <Button onClick={increaseNeutral} text='neutral' />
      <Button onClick={increaseBad} text='bad' />

      <Display text={'statistics'} />

      <Statistics name={'good'} count={good}/>
      <Statistics name={'neutral'} count={neutral}/>
      <Statistics name={'bad'} count={bad}/>
      <Statistics name={'all'} count={all} />
      <Statistics name={'average'} count={average} />
      <Statistics name={'positive'} count={positive} />

    </div>
  )
}

export default App;