import axios from 'axios';
const baseUrl = 'http://localhost:3333/persons';

const getContacts = () => {
  return axios.get(baseUrl).then(res => res.data);
};

const addContact = data => {
  return axios.post(baseUrl, data).then(res => res.data);
};

const deleteContact = id => {
  return axios.delete(`${baseUrl}/${id}`);
};

const updateContact = contact => {
  return axios.put(`${baseUrl}/${contact.id}`, contact).then(res => res.data);
};

const phonebook = { getContacts, addContact, deleteContact, updateContact };

export default phonebook;
