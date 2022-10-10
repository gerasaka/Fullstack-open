import React from 'react';
import CountryDetails from './CountryDetails';

const CountryList = ({ countries }) => {
  if (countries.length === 1) return <CountryDetails country={countries[0]} />;
  if (countries.length > 10) {
    return <p>Too many matches, specifi another filter</p>;
  }

  return (
    <ul>
      {countries.map(country => (
        <li key={country.name.official}>{country.name.common}</li>
      ))}
    </ul>
  );
};

export default CountryList;
