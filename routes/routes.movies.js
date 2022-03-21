const express = require("express");
const Movie = require("../models/Movie.model");
const router = express.Router();

/* GET home page */
router.get("/movies", async (req, res, next) => {
  try {
    allMovies = await Movie.find();
    console.log("Retrieved movie from DB:", allMovies);

    res.render("movies.hbs", { movies: allMovies });
  } catch (error) {
    console.log("Error while searching artists occurred: ", error);
  }
});

router.get("/movies/:id", async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id);
    console.log("Retrieved movie from DB:", movie);

    res.render("selected-movie.hbs", { movie });
  } catch (error) {
    console.log("Error while searching artists occurred: ", error);
  }
});

module.exports = router;
