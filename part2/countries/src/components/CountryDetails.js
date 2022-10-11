import React from 'react';

import Weather from './Weather';

const CountryDetails = ({ country }) => {
  return (
    <>
      <h1>{country.name.common}</h1>
      <img src={country.flags.png} alt={country.name.common + ' flag'} />
      <p>
        Region: {country.region} - {country.subregion}
      </p>
      <p>Capital: {country.capital[0]}</p>
      <h2>Languages:</h2>
      <ul>
        {Object.values(country.languages).map(language => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <h2>Currencies:</h2>
      <ul>
        {Object.values(country.currencies).map(currency => (
          <li key={currency.name}>
            {currency.name} ( {currency.symbol} )
          </li>
        ))}
      </ul>
      <Weather city={country.capital[0]} />
    </>
  );
};

export default CountryDetails;
