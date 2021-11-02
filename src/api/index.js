import axios from 'axios';

const API_URL = "https://covid19.mathdro.id/api";
export const fetchAPI = async (country) => {
  let changeAbleURL = API_URL;

  if (country) {
    changeAbleURL = `${API_URL}/countries/${country}`;
  }

  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeAbleURL);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch(err) {
    console.log(err);
  }
};

export const fetchCountries = async () => {
  try {
    const { data: { countries } } = await axios(`${API_URL}/countries`);
    return countries.map(country => country.name);
  } catch(err) {
    console.log(err)
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/daily`);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate
    }));
    
    return modifiedData;
  } catch(err) {
    console.log(err);
  }
};