const City = require('../models/City');
const TrackedCity = require('../models/TrackedCity');
const { getWeatherData } = require('../services/weatherService');

exports.addCity = async (req, res) => {
  try {
    const { name, country } = req.body;
    const newCity = new City({ name, country });
    await newCity.save();

    const trackedCity = await getWeatherData(name, country);
    await trackedCity.save();

    res.status(201).json(trackedCity);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.removeCity = async (req, res) => {
    try {
        const cityName = req.params.name;
        
        const deletedCity = await TrackedCity.findOneAndDelete({ name: cityName });
      
        if (!deletedCity) {
          return res.status(404).json({ message: "City not found" });
        }
      
        res.status(204).send();  
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
      
};

exports.getAllCities = async (req, res) => {
  try {
    const cities = await TrackedCity.find();
    res.json(cities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getCityDetails = async (req, res) => {
  try {
    const cityId = req.params.id;
    const city = await TrackedCity.findById(cityId);
    if (!city) return res.status(404).json({ message: 'City not found' });
    res.json(city);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.findCityByName = async (req, res) => {
    try {
      const cityName = req.query.city;

      const city = await City.findOne({ name: { $regex: new RegExp(cityName, "i") } });
  
      if (!city) {
        return res.status(404).json({ message: "City not found" });
      }
  
      res.status(200).json(city);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }