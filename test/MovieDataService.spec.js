"use strict";
var $ = require('jquery');
var chai_1 = require('chai');
var MovieDataService_1 = require('../src/MovieDataService');
describe('movieDataService', function () {
    var expectedMovies = [{ title: 'The Matrix', year: 1998, rating: 5 }];
    describe('loadMovies', function () {
        it('should return movies from api', function () {
            sinon.stub($, 'getJSON').returns({ then: function (cb) { cb(expectedMovies); } });
            chai_1.expect(MovieDataService_1.movieDataService.loadMovies().length).to.be.equal(1);
            sinon.restore($.getJSON);
        });
    });
    describe('save', function () {
        var postSpy = sinon.spy($, 'post');
        var movie = new MovieDataService_1.Movie('The Matrix', 1999, 5);
        it('should post the movie to the movies api', function () {
            MovieDataService_1.movieDataService.save(movie);
            chai_1.expect(postSpy.called).to.be.true;
        });
        it('should post the movie in json format', function () {
            var stringifySpy = sinon.spy(JSON, 'stringify');
            MovieDataService_1.movieDataService.save(movie);
            chai_1.expect(stringifySpy.calledWith(movie)).to.be.true;
        });
        it('should post the movie to the right url', function () {
            MovieDataService_1.movieDataService.save(movie);
            chai_1.expect(postSpy.calledWithMatch(/\/movies/)).to.be.true;
        });
    });
});
