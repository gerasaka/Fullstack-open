import React from 'react';

import { Part } from './Part';

export const Content = ({ parts }) => {
  return parts.map(part => (
    <Part key={part.id} name={part['name']} number={part['exercises']} />
  ));
};
