const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const WeatherController = require("../controllers/weatherController")
const MemeHandler = require("../controllers/memeController")



// ===============================-:ForCowin:-===================================

router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date

router.get("/cowin/getDistrictsById", CowinController.getDistrictsById)

// ================================-:ForWeatherCheck:-=============================

router.get("/getWeather", WeatherController.getaWeather)

router.get("/getSortedCities", WeatherController.getSortedCities)

// ===================================-:ForMemHandler:-=============================

router.post("/memeHandler", MemeHandler.memeHandler)


module.exports = router;