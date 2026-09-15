import { useState } from "react";


const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const MostVotes = ({anecdote, maxVotes}) => {
  return(
    <div>
      <p>{anecdote}</p>
      <p>has {maxVotes} votes</p>
    </div>
  );
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const[selected, setSelected] = useState(0);

  const [votes, setVotes] = useState(new Array(8).fill(0));

  const [countVotes, setCountVotes] = useState(0);

  const generatedIndex = () => {
    const tam = anecdotes.length;
    let num = Math.floor(Math.random() * tam);
    setSelected(num)
  }

  const vote = () => {
    const copyVotes = [...votes];   
    copyVotes[selected] += 1;
    setVotes(copyVotes);
  }

  const maxVotes = Math.max(...votes);
  const mostVoteIndex = votes.indexOf(maxVotes);

  return(
    <section>
      <div>
        <h2>Anecdote of the day</h2>
        <p>{anecdotes[selected]}</p>
        <p>has {votes[selected]} votes</p>
        <Button onClick={vote} text={'vote'}/>
        <Button onClick={generatedIndex} text={'next anecdote'}/>
      </div>
      <div>
        <h2>Anedote with most votes</h2>
        <MostVotes anecdote={anecdotes[mostVoteIndex]} maxVotes={maxVotes}/>
      </div>
    </section>
  )
}

export default App;