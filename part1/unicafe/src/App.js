import { useState } from 'react';

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

      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {(good - bad) / total}</p>
      <p>positive {(good * 100) / total}</p>
    </>
  );
};

export default App;
