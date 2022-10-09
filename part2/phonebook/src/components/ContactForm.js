import React from 'react';

export const ContactForm = ({ value, handler }) => {
  const { newName, newNumber } = value;
  const { handleNameChange, handleNumberChange, addContact } = handler;

  return (
    <form onSubmit={e => addContact(e)}>
      <div>
        name: <input value={newName} onChange={e => handleNameChange(e)} />
      </div>
      <div>
        number:{' '}
        <input value={newNumber} onChange={e => handleNumberChange(e)} />
      </div>
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
  );
};
