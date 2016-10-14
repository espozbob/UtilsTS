"use strict";
var $ = require('jquery');
var Movie = (function () {
    function Movie(title, year, rating) {
        this.title = title;
        this.year = year;
        this.rating = rating;
    }
    return Movie;
}());
exports.Movie = Movie;
var MovieDataService = (function () {
    function MovieDataService() {
    }
    MovieDataService.prototype.loadMovies = function () {
        var movies = [];
        $.getJSON('/movies2').then(function (data) {
            data.forEach(function (movie) { return movies.push(new Movie(movie.title, movie.year, movie.rating)); });
        });
        return movies;
    };
    MovieDataService.prototype.save = function (movie) {
        return $.post('/movies2', JSON.stringify(movie));
    };
    return MovieDataService;
}());
exports.movieDataService = new MovieDataService();
