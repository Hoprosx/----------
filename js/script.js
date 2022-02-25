"use strict";

const numberOfFilms = +prompt("Сколько фильмов ты уже посмотрел?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt("Один из последних просмотренных фильмов?", " "),
    b = +prompt("На сколько вы его оцениваете?", "");
  personalMovieDB.movies[a] = b;

  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalMovieDB.movies[a] = b;
  } else {
    i--;
  }
}

if (personalMovieDB.count < 10) {
  alert("Просмотрено довльно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  alert("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
  alert("Вы посмотрели достаточно много фильмов");
} else {
  alert("Ошибка");
}

console.log(personalMovieDB);
