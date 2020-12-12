// Requiring our models
const db = require("../models");
const express = require('express');
const router = express.Router();


// Routes
// =============================================================

// GET route for getting all of the burgers
router.get("/api/burgers", function (req, res) {
  db.Burger.findAll().then(function (dbBurger) {
    res.json(dbBurger);
  });
});

// Get rotue for retrieving a single burgers
router.get("/api/burgers/:id", function (req, res) {
  db.Burger.findOne({
    where: {
      id: req.params.id
    }
  }).then(function (dbBurger) {
    console.log(dbBurger);
    res.json(dbBurger);
  });
});

// POST route for saving a new burgers
router.post("/api/burgers", function (req, res) {
  console.log(req.body)
  db.Burger.create(req.body).then(function (dbBurger) {
    res.json(dbBurger);
  });
});

// DELETE route for deleting burgers
router.delete("/api/burgers/:id", function (req, res) {
  db.Burger.destroy({
    where: {
      id: req.params.id
    }
  }).then(function (dbBurger) {
    res.json(dbBurger);
  });
});

// PUT route for updating burgers
router.put("/api/burgers", function (req, res) {
  db.Burger.update(
    req.body, {
      where: {
        id: req.body.id
      }
    }).then(function (dbBurger) {
    res.json(dbBurger);
  });
});

module.exports = router;