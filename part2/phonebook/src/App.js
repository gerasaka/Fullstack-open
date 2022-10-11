import { useEffect, useState } from 'react';

import phonebook from './services/phonebook';

import ContactForm from './components/ContactForm';
import Contacts from './components/Contacts';
import Filter from './components/Filter';
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [query, setQuery] = useState('');
  const [notify, setNotify] = useState('');

  useEffect(() => {
    phonebook.getContacts().then(res => setPersons(res));
  }, []);

  const handleNameChange = e => {
    setNewName(e.target.value);
  };

  const handleNumberChange = e => {
    setNewNumber(e.target.value);
  };

  const handleQueryChange = e => {
    setQuery(e.target.value);
  };

  const addContactHandler = e => {
    e.preventDefault();

    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === newName) {
        if (persons[i].number === newNumber) {
          return alert(`${newName} is already added to phonebook`);
        }

        const validateUpdate = window.confirm(
          `${persons[i].name} is already added, update phone number?`
        );

        if (validateUpdate) return updateContactHandler(persons[i]);
        return;
      }

      if (persons[i].number === newNumber) {
        return alert(`${newNumber} is should belong to someone else`);
      }
    }

    const newPerson = { name: newName, number: newNumber, id: +new Date() };

    phonebook
      .addContact(newPerson)
      .then(res => setPersons(persons.concat(res)));

    setNotify({ type: 'success', message: `Added ${newName}` });
  };

  const updateContactHandler = contact => {
    const newContact = { ...contact, number: newNumber };

    phonebook
      .updateContact(newContact)
      .then(res =>
        setPersons(persons.map(person => (person.id === res.id ? res : person)))
      );

    setNotify({ type: 'success', message: `Update ${contact.name} number` });
  };

  const deleteContactHandler = contact => {
    const validateDelete = window.confirm(
      `Delete ${contact.name}? This can't be undone`
    );

    if (validateDelete) {
      phonebook
        .deleteContact(contact.id)
        .then(() =>
          setPersons(persons.filter(person => person.id !== contact.id))
        )
        .catch(() => {
          setNotify({
            type: 'error',
            message: `${contact.name} not found or has already been deleted`,
          });
          setPersons(persons.filter(person => person.id !== contact.id));
        });
    }

    setNotify({ type: 'warning', message: `${contact.name} deleted` });
  };

  const filteredContacts = persons.filter(person =>
    person.name.toLowerCase().includes(query)
  );

  const notifyUser = (type, message) => {
    setTimeout(() => {
      setNotify(null);
    }, 3000);
    return <Notification type={notify.type} message={notify.message} />;
  };

  return (
    <div>
      {notify ? notifyUser(notify.type, notify.message) : ''}
      <h2>Phonebook</h2>
      <Filter query={query} handler={handleQueryChange} />

      <h3>Add a new contact</h3>
      <ContactForm
        value={{ newName, newNumber }}
        handler={{ handleNameChange, handleNumberChange, addContactHandler }}
      />

      <h3>Numbers</h3>
      <Contacts
        contacts={filteredContacts}
        deleteContact={deleteContactHandler}
      />
    </div>
  );
};

export default App;
