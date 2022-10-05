import { useState } from 'react';

const Statistics = props => (
  <>
    <h2>statistics</h2>
    <p>good {props.good}</p>
    <p>neutral {props.neutral}</p>
    <p>bad {props.bad}</p>
    <p>all {props.total}</p>
    <p>average {(props.good - props.bad) / props.total}</p>
    <p>positive {(props.good * 100) / props.total}</p>
  </>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;

  const handleClick = type => {
    if (type === 'good') setGood(prev => (prev += 1));
    if (type === 'neutral') setNeutral(prev => (prev += 1));
    if (type === 'bad') setBad(prev => (prev += 1));
  };

  return (
    <>
      <h2>give feedback</h2>
      <button onClick={() => handleClick('good')}>good</button>
      <button onClick={() => handleClick('neutral')}>neutral</button>
      <button onClick={() => handleClick('bad')}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </>
  );
};

export default App;
