import React from 'react';

const CountryDetails = ({ country }) => {
  return (
    <>
      <h2>{country.name.common}</h2>
      <img src={country.flags.png} alt={country.name.common + ' flag'} />
      <p>
        Region: {country.region} - {country.subregion}
      </p>
      <p>Capital: {country.capital[0]}</p>
      <p>Languages:</p>
      <ul>
        {Object.values(country.languages).map(language => (
          <li key={language}>{language}</li>
        ))}
      </ul>
    </>
  );
};

export default CountryDetails;
