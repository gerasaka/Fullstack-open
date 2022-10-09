import React from 'react';

export const Filter = ({ query, handler }) => {
  return (
    <div>
      filter shown with <input value={query} onChange={e => handler(e)} />
    </div>
  );
};
