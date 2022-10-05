import { useState } from 'react';

const Button = ({ text, handleClick }) => (
  <button onClick={() => handleClick(text)}>{text}</button>
);

const StatisticLine = ({ text, value }) => (
  <p>
    {text} {value}
  </p>
);

const Statistics = props => {
  if (props.total === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <>
      <StatisticLine text={'good'} value={props.good} />
      <StatisticLine text={'neutral'} value={props.neutral} />
      <StatisticLine text={'bad'} value={props.bad} />
      <StatisticLine text={'all'} value={props.all} />
      <StatisticLine
        text={'average'}
        value={(props.good - props.bad) / props.total}
      />
      <StatisticLine
        text={'positive'}
        value={(props.good * 100) / props.total}
      />
    </>
  );
};

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
      <Button text={'good'} handleClick={handleClick} />
      <Button text={'neutral'} handleClick={handleClick} />
      <Button text={'bad'} handleClick={handleClick} />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </>
  );
};

export default App;
