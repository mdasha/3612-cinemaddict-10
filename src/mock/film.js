import {filmsTitles, posters, genres, countries, ages} from "../const.js";
import {sentences, getRandomIntegerNumber} from "../utils.js";

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);
  return array[randomIndex];
};

const generateDescription = () => {
  return sentences
    .filter(() => Math.random() > 0.5)
    .slice(0, 3);
};

const generateGenres = () => {
  return genres
    .filter(() => Math.random() > 0.5)
    .slice(0, 3);
};

const getRandomFloatNumber = (min, max) => {
  return (min + (max * Math.random())).toFixed(1);
};

const getRandomDate = () => {
  const targetDate = new Date();
  const diffValue = getRandomIntegerNumber(0, 25);
  targetDate.setDate(targetDate.getDate() - diffValue);
  return targetDate;
};

const generateFilm = () => {
  const date = getRandomDate().getDate();
  const month = getRandomDate().getUTCMonth();
  const year = getRandomDate().getFullYear();
  const duration = ` ${getRandomIntegerNumber(1, 3)}h ${getRandomIntegerNumber(1, 59)}m`;
  const genresList = new Set(generateGenres(genres));
  return {
    title: getRandomArrayItem(filmsTitles),
    description: new Set(generateDescription(sentences)),
    poster: getRandomArrayItem(posters),
    date: `${date}.${month}.${year}`,
    year,
    duration,
    country: getRandomArrayItem(countries),
    genre: Array.from(genresList)[0],
    genres: genresList,
    rating: getRandomFloatNumber(1, 9),
    comments: getRandomIntegerNumber(1, 55),
    age: getRandomArrayItem(ages)
  };
};

const generateFilms = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateFilm);
};

const compareRatings = (filmA, filmB) => {
  const ratingFilmA = filmA.rating;
  const ratingFilmB = filmB.rating;

  let comparison;
  if (ratingFilmA < ratingFilmB) {
    comparison = 1;
  } else if (ratingFilmA > ratingFilmB) {
    comparison = -1;
  }
  return comparison;
};

const compareCommentsQuantity = (filmA, filmB) => {
  const commentsFilmA = filmA.comments;
  const commentsFilmB = filmB.comments;

  let comparison;
  if (commentsFilmA < commentsFilmB) {
    comparison = 1;
  } else if (commentsFilmA > commentsFilmB) {
    comparison = -1;
  }
  return comparison;
};

export {generateFilm, generateFilms, compareRatings, compareCommentsQuantity};
