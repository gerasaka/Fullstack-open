import React from 'react';

export const Filter = ({ query, handler }) => {
  return (
    <div>
      Search contact name <input value={query} onChange={e => handler(e)} />
    </div>
  );
};

export default Filter;
