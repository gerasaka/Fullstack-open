import React from 'react';

import { Content } from './Content';
import { Header } from './Header';

export const Course = ({ course }) => {
  return (
    <>
      <Header courseName={course.name} />
      <Content parts={course['parts']} />
    </>
  );
};
