import {COUNT_FILMS, WATCHED_FILMS, HISTORY_FILMS, FAVOURITE_FILMS} from '../const.js';

const menuNames = [
  {
    name: `All movies`,
    count: COUNT_FILMS
  },

  {
    name: `Watchlist`,
    count: WATCHED_FILMS
  },

  {
    name: `History`,
    count: HISTORY_FILMS
  },

  {
    name: `Favorites`,
    count: FAVOURITE_FILMS
  }
];

const generateMenu = () => {
  return menuNames.map((it) => {
    return {
      name: it.name,
      count: it.count
    };
  });
};

export {generateMenu};
