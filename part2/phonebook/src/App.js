import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

  const handleNameChange = e => {
    setNewName(e.target.value);
  };

  const addContact = e => {
    e.preventDefault();

    const newPerson = { name: newName };
    setPersons(persons => persons.concat(newPerson));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={e => addContact(e)}>
        <div>
          name: <input value={newName} onChange={e => handleNameChange(e)} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => {
        return <p key={person.name}>{person.name}</p>;
      })}
    </div>
  );
};

export default App;
