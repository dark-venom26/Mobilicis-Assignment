const express = require("express");

const { getUserDetails, lowerIncomeBmwMercedes, phonePriceGreater, lastNameIncludesM, notIncludeDigits, topTenCities } = require("../controllers/userController");

const router = express.Router();

router.route("/usersDetails").get(getUserDetails)
router.route("/lowerIncomeBmwMercedes").get(lowerIncomeBmwMercedes)
router.route("/phonePriceGreater").get(phonePriceGreater)
router.route("/lastNameIncludesM").get(lastNameIncludesM)
router.route("/notIncludeDigits").get(notIncludeDigits)
router.route("/topTenCities").get(topTenCities)

module.exports = router;