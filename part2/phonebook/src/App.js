import { useState } from 'react';
import { ContactForm } from './components/ContactForm';
import { Contacts } from './components/Contacts';
import { Filter } from './components/Filter';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [query, setQuery] = useState('');

  const handleNameChange = e => {
    setNewName(e.target.value);
  };

  const handleNumberChange = e => {
    setNewNumber(e.target.value);
  };

  const handleQueryChange = e => {
    setQuery(e.target.value);
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

    const newPerson = { name: newName, number: newNumber, id: +new Date() };
    setPersons(persons.concat(newPerson));
  };

  const filteredContacts = persons.filter(person =>
    person.name.toLowerCase().includes(query)
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter query={query} handler={handleQueryChange} />

      <h3>Add a new contact</h3>
      <ContactForm
        value={{ newName, newNumber }}
        handler={{ handleNameChange, handleNumberChange, addContact }}
      />

      <h3>Numbers</h3>
      <Contacts contacts={filteredContacts} />
    </div>
  );
};

export default App;
