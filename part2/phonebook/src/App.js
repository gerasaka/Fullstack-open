import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleNameChange = e => {
    setNewName(e.target.value);
  };

  const handleNumberChange = e => {
    setNewNumber(e.target.value);
  };

  const addContact = e => {
    e.preventDefault();

    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === newName) {
        return alert(`${newName} is already added to phonebook`);
      }

      if (persons[i].number === newNumber) {
        return alert(`${newNumber} is should belong to someone else`);
      }
    }

    const newPerson = { name: newName, number: newNumber };
    setPersons(persons.concat(newPerson));
  };

  return (
    <div>
      <h2>Phonebook</h2>
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
      <h2>Numbers</h2>
      {persons.map(person => {
        return (
          <p key={person.name}>
            {person.name} {person.number}
          </p>
        );
      })}
    </div>
  );
};

export default App;
