import { useEffect, useState } from 'react';
import { CountryWrappper, Select } from './StyledCountryPicker';
import { fetchCountries } from '../../api';

const CountryPicker = ({ handleCountryChange }) => {
  const [ countries, setCountries ] = useState([]);

  useEffect(() => {
    const fetchedCountryAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchedCountryAPI();
  }, []);

  return (
    <CountryWrappper>
      <Select onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {countries.map((country, i) => (
          <option key={i} value={country}>{country}</option>
        ))}
      </Select>
    </CountryWrappper>
  )
}

export default CountryPicker
