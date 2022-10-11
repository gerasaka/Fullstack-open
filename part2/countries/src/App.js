import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CountryList from './components/CountryList';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then(res => {
      setCountries(res.data);
    });
  }, []);

  const handleQueryChange = e => {
    setQuery(e.target.value);
    setFilteredCountries(
      countries.filter(country => {
        return country.name.common.toLowerCase().includes(query.toLowerCase());
      })
    );
  };

  return (
    <>
      <h1>Find Country</h1>
      <input type='text' value={query} onChange={e => handleQueryChange(e)} />
      {query === '' ? (
        <p>Start typing to search</p>
      ) : (
        <CountryList
          countries={filteredCountries}
          setCountry={setFilteredCountries}
        />
      )}
    </>
  );
};

export default App;
