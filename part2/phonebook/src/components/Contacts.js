import React from 'react';

export const Contacts = ({ contacts }) => {
  return contacts.map(person => (
    <p key={person.id}>
      {person.name} {person.number}
    </p>
  ));
};
