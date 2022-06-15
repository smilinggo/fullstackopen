import { useState } from "react";

const points = [ 0,0,0,0,0,0,0 ];

const copy = [...points];

const Article = (props) => (
  <h1>{props.text}</h1>
)
const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Display = (props) => (
  <div>
    has {props.count} votes
  </div>
);

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

const randomNumber = () => Math.floor(Math.random() * anecdotes.length)

const [selected, setSelected] = useState(0);
const [mostSelected, setMostSelected] = useState(0)
const [numberOfVotes, setNumberOfVotes] = useState(0)

const Work = () => {
  const chosenArticle = randomNumber()
  setSelected(chosenArticle);
  setNumberOfVotes(copy[chosenArticle]);
}


function votePlus() {
    copy[selected] += 1
    const max = Math.max(...copy);
    const index = copy.indexOf(max);
    setMostSelected(index)
    setNumberOfVotes(copy[selected])
}


  return (
    <div>
      <Article text='Anecdote of the day' />
      {anecdotes[selected]}
      <Display count={numberOfVotes} />
      <Button handleClick={votePlus} text="vote" />
      <Button handleClick={Work} text="next anecdote" />
      <Article text='Anecdote with most votes' />
      {anecdotes[mostSelected]}
      <Display count={copy[mostSelected]} />
    </div>
  )
}


export default App;
