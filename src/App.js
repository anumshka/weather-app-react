import React, { useState } from "react";
import Form from "./components/Form/Form";
import Weather from "./components/Weather/Weather";

const api = {
  // Signup to https://openweathermap.org/
  // Create a .env file and add : REACT_APP_WEATHER_API_KEY=< your api key here>
  key: process.env.REACT_APP_WEATHER_API_KEY,
  base: "https://api.openweathermap.org/data/2.5/",
};

const App = () => {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [weather, setWeather] = useState({});
  const [error, setError] = useState(null);

  const getData = async (query) => {
    try {
      console.log(query);
      setQuery(query);
      setError(false);
      setWeather("");
      setIsLoading(true);
      const res = await fetch(
        `${api.base}weather?q=${query}&units=metric&APPID=${api.key}`
      );

      if (!res.ok) {
        throw new Error("Did you spell correctly?");
      }
      const result = await res.json();
      setWeather(result);
      setQuery("");

      //console.log(result);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  };

  return (
    <div>
      <Form toApp={getData}></Form>
      {!isLoading && error && <h2 className="prompts">{error}</h2>}
      {isLoading && <h2 className="prompts">Loading...</h2>}
      {!isLoading && <Weather weather={weather} />}
    </div>
  );
};

export default App;
