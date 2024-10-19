import React, { createContext, useContext, useState, useEffect } from 'react';

const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const [trackedCities, setTrackedCities] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch all tracked cities on load
    fetchTrackedCities();
  }, []);

  const fetchTrackedCities = async () => {
    const response = await fetch('http://localhost:5000/api/trackedCities');
    const data = await response.json();
    setTrackedCities((pre) => [data]);
  };

  const searchCity = async (cityName) => {
    const response = await fetch(`http://localhost:5000/api/search?city=${cityName}`);
    const data = await response.json();
    console.log(data)
    setSearchResults((prevResults) => [data]); // Assuming the API returns an array of city suggestions
  };

  const addCityToTracked = async (city) => {
    await fetch('http://localhost:5000/api/city', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(city),
    });
    fetchTrackedCities(); // Refresh tracked cities after adding
  };

  return (
    <CityContext.Provider value={{setTrackedCities, trackedCities, searchResults, searchCity, setSearchTerm, setSearchResults, addCityToTracked, searchTerm, setSearchTerm }}>
      {children}
    </CityContext.Provider>
  );
};

export const useCityContext = () => useContext(CityContext);
