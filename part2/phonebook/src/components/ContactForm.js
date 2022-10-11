import React from 'react';

const ContactForm = ({ value, handler }) => {
  const { newName, newNumber } = value;
  const { handleNameChange, handleNumberChange, addContactHandler } = handler;

  return (
    <form onSubmit={e => addContactHandler(e)}>
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

export default ContactForm;
