import {filmsTitles, posters, genres, countries, ages} from '../const.js';
import {sentences, getRandomIntegerNumber, getRandomArrayItem, getRandomDate} from '../utils/common.js';

const generateDescription = () => {
  return sentences
    .filter(() => Math.random() > 0.5)
    .slice(0, 3);
};

const generateGenres = () => {
  return genres
    .filter(() => Math.random() > 0.5)
    .slice(0, getRandomIntegerNumber(1, 4));
};

const getRandomFloatNumber = (min, max) => {
  return (min + (max * Math.random())).toFixed(1);
};

const generateFilm = () => {

  const date = getRandomDate();
  const genresList = new Set(generateGenres(genres));
  return {
    id: String(new Date() + Math.random()),
    title: getRandomArrayItem(filmsTitles),
    description: new Set(generateDescription(sentences)),
    poster: getRandomArrayItem(posters),
    date,
    durationHours: getRandomIntegerNumber(1, 3),
    durationMinutes: getRandomIntegerNumber(2, 50),
    country: getRandomArrayItem(countries),
    genre: Array.from(genresList)[0],
    genres: genresList,
    rating: getRandomFloatNumber(1, 9),
    yourRating: ``,
    commentsCount: getRandomIntegerNumber(1, 10),
    age: getRandomArrayItem(ages),
    isFavourite: getRandomIntegerNumber(0, 2),
    isWatched: getRandomIntegerNumber(0, 2),
    isAddedToWishList: getRandomIntegerNumber(0, 2),
    isYourRating: Math.random > 0.5
  };
};

const generateFilms = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateFilm);
};

const compareRatings = (previousFilm, nextFilm) => {
  const previousFilmRating = previousFilm.rating;
  const nextFilmRating = nextFilm.rating;

  let comparison;
  if (previousFilmRating < nextFilmRating) {
    comparison = 1;
  } else if (previousFilmRating > nextFilmRating) {
    comparison = -1;
  }
  return comparison;
};

const compareCommentsQuantity = (previousFilm, nextFilm) => {
  const previousFilmComments = previousFilm.comments;
  const nextFilmComments = nextFilm.comments;

  let comparison;
  if (previousFilmComments < nextFilmComments) {
    comparison = 1;
  } else if (previousFilmComments > nextFilmComments) {
    comparison = -1;
  }
  return comparison;
};

export {generateFilm, generateFilms, compareRatings, compareCommentsQuantity};
