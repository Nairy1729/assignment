const axios = require('axios');
const TrackedCity = require('../models/TrackedCity');
const cron = require('node-cron');

exports.getWeatherData = async (city, country) => {
  const apiKey = process.env.WEATHER_API_KEY;
  const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}`;
  
  const response = await axios.get(apiUrl);

  const trackedCity = new TrackedCity({
    name: city,
    country: country,
    weatherData: response.data, 
  });

  return trackedCity;
};

cron.schedule('0 * * * *', async () => {
  try {
    const trackedCities = await TrackedCity.find();
    trackedCities.forEach(async (city) => {
      const tc = await exports.getWeatherData(city.name, city.country);
      await tc.save();
    });
    console.log('Weather data updated for all tracked cities');
  } catch (error) {
    console.error('Error updating weather data:', error);
  }
});
