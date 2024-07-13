import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';
import "./SearchBox.css";

import { useState } from 'react';

export default function SearchBox({ updateinfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_url = "https://api.openweathermap.org/data/2.5/weather";
  const API_key = "3946454d92a2e0a49cb3e134e46a847b";
 
  let getWeatherData = async () => {
    try {
      let result = await fetch(`${API_url}?q=${city}&appid=${API_key}&units=metric`);
      let jsonResponse = await result.json();
      if (jsonResponse.cod !== 200) {
        throw new Error(jsonResponse.message);
      }
      let res = {
        city: city,
        feels_like: jsonResponse.main.feels_like,
        humidity: jsonResponse.main.humidity,
        pressure: jsonResponse.main.pressure,
        sea_level: jsonResponse.main.sea_level,
        temp: jsonResponse.main.temp,
        temp_max: jsonResponse.main.temp_max,
        temp_min: jsonResponse.main.temp_min,
        weather: jsonResponse.weather[0].description,
      };
      return res;
    } catch (err) {
      throw err;
    }
  };

  let handleSearch = (event) => {
    setCity(event.target.value);
  };

  let onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data = await getWeatherData();
      updateinfo(data);
      setCity("");
      setError(false);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div>
      <h2 className='search_heading'>Search by City Name</h2>
      <form onSubmit={onSubmit}>
         <div className="search_btn">
          <input type="text" className='textbox'
          placeholder='Search a city' required
          value={city}
          onChange={handleSearch}/>
        <Button  variant="contained" size="large" type="submit">
          Search
        </Button>
         </div>
       <br />
        {error && <Alert severity="error">No Such Place in our App</Alert>}
      </form>
    </div>
  );
}
