import React from 'react';

export const Contacts = ({ contacts }) => {
  if (contacts.length === 0) return <p>No contact match</p>;

  return contacts.map(person => (
    <p key={person.id}>
      {person.name} {person.number}
    </p>
  ));
};
