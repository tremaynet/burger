// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
const path = require("path");
const router = require('express').Router();
const db = require("../models");

// Routes
// =============================================================


// Each of the below routes just handles the HTML page that the user gets sent to.



router.get('/burgers', renderBurgers);
router.get('/', renderBurgers);

// helper for / and burger routes
function renderBurgers(req, res) {
  res.render('burgers');
}

module.exports = router;