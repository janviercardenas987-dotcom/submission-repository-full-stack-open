import { useState } from "react";


const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Display = ({text}) => <h2>{text}</h2>

const Statistics = ({name, count}) => <p>{name} {count}</p>
    
  
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const increaseGood = () => setGood(good + 1) 
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

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
    </div>
  )
}

export default App;