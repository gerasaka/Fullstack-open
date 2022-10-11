import React from 'react';

export const Contacts = ({ contacts, deleteContact }) => {
  if (contacts.length === 0) return <p>No contact match</p>;

  return contacts.map(person => (
    <p key={person.id}>
      {person.name} ( {person.number} ){' '}
      <button onClick={() => deleteContact(person)}>delete</button>
    </p>
  ));
};

export default Contacts;
