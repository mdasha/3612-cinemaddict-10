import {FilterType} from '../const.js';

const getWatchlistFilms = (films) => {
  return films.filter((film) => film.isAddedToWishList);
};

const getHistoryFilms = (films) => {
  return films.filter((film) => film.isWatched);
};

const getFavouriteFilms = (films) => {
  return films.filter((film) => film.isFavourite);
};

const getFilmsByFilter = (films, filterType) => {
  switch (filterType) {
    case FilterType.ALL:
      return films;
    case FilterType.WATCHLIST:
      return getWatchlistFilms(films);
    case FilterType.HISTORY:
      return getHistoryFilms(films);
    case FilterType.FAVOURITES:
      return getFavouriteFilms(films);
  }

  return films;
};

export {getWatchlistFilms, getHistoryFilms, getFavouriteFilms, getFilmsByFilter};
