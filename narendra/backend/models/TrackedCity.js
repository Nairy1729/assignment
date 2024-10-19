const mongoose = require('mongoose');

const trackedCitySchema = new mongoose.Schema({
    name: { type: String, required: true },
    country: { type: String, required: true },
    weatherData: { type: mongoose.Schema.Types.Mixed }, 
    updatedAt: { type: Date, default: Date.now },
  }, { collection: 'tracked_cities' });
  

module.exports = mongoose.model('TrackedCity', trackedCitySchema);
