const express = require('express');
const { addCity, removeCity, getAllCities, getCityDetails, findCityByName } = require('../controllers/weatherController');
const router = express.Router();

router.post('/city', addCity);
router.delete('/city/:name', removeCity);
router.get('/trackedCities', getAllCities);
router.get('/trackedCity/:id', getCityDetails);
router.get('/search', findCityByName);

module.exports = router;
