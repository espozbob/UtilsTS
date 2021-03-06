"use strict";
var MovieDataService_1 = require('./MovieDataService');
var MoviesViewModel = (function () {
    function MoviesViewModel() {
        this.movies = MovieDataService_1.movieDataService.loadMovies();
    }
    MoviesViewModel.prototype.select = function (movie) {
        this.selectedMovie = movie;
    };
    MoviesViewModel.prototype.rate = function (rating) {
        this.selectedMovie.rating = rating;
        MovieDataService_1.movieDataService.save(this.selectedMovie);
    };
    return MoviesViewModel;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MoviesViewModel;
