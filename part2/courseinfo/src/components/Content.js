import React from 'react';

import { Part } from './Part';
import { Total } from './Total';

export const Content = ({ parts }) => {
  let totalExercises = 0;

  return (
    <>
      {parts.map(part => {
        totalExercises += part['exercises'];
        return (
          <Part key={part.id} name={part['name']} number={part['exercises']} />
        );
      })}
      <Total total={totalExercises} />
    </>
  );
};
