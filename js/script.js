"use strict";

const numberOfFilms = +prompt("Сколько фильмов ты уже посмотрел?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Один из последних просмотренных фильмов?", " ");
const c = +prompt("На сколько вы его оцениваете?", "");
const b = prompt("Один из последних просмотренных фильмов?", " ");
const d = +prompt("На сколько вы его оцениваете?", "");

personalMovieDB.movies[a] = c;
personalMovieDB.movies[b] = d;

console.log(personalMovieDB);
