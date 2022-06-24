import axios from "axios";
import { useState, useEffect } from "react";

const api_key = process.env.REACT_APP_API_KEY;

const weatherValue = {
  temp: "",
  wind: "",
  clouds: "",
  description: "",
};

const OneCountry = ({ item }) => {
  const [weather, setWeather] = useState(weatherValue)  

  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${item[0].capital}&appid=${api_key}&units=metric`
      )
      .then((response) => {
        setWeather({temp: response.data.main.temp, 
                    wind: response.data.wind.speed,
                    clouds: response.data.weather[0].icon, 
                    description: response.data.weather[0].description
                  })
      });
  },);
  return (
    <div>
      <h1>{item[0].name["common"]}</h1>
      <li style={{ listStyleType: "none" }}>capital {item[0].capital}</li>
      <li style={{ listStyleType: "none" }}>area {item[0].area}</li>
      <h2>languages:</h2>
      <ul>
        {Object.values(item[0].languages).map((value) => (
          <li key={value}>{value}</li>
        ))}
      </ul>
      <img width={200} src={item[0].flags.png} alt="flag" />
      <h1>Weather in {item[0].capital}</h1>
      <p>temperature {weather.temp} Celcius</p>
      <img src={`http://openweathermap.org/img/wn/${weather.clouds}@2x.png`} alt={weather.description}/>
      <p>wind {weather.wind} m/s</p>
    </div>
  );
};

export default OneCountry;
