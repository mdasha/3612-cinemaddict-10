const COUNT_FILMS = 22;
const COUNT_TOP_RATED = 2;
const COUNT_MOST_COMMENTED = 2;
const SHOWING_TASKS_COUNT_ON_START = 5;
const SHOWING_TASKS_COUNT_BY_BUTTON = 5;

const filmsTitles = [
  `Грязные танцы`,
  `Унесенные ветром`,
  `Титаник`,
  `Малифисента`,
  `Небоскреб`,
  `Эверест`,
  `Кадеты`,
  `Маша+Саша`,
  `Полицейская академия`,
  `Один дома`,
  `Убойная сила`,
  `След`,
  `Мухтар`,
  `Просто Мария`,
  `Трансформеры`
];

const posters = [
  `made-for-each-other.png`,
  `popeye-meets-sinbad.png`,
  `sagebrush-trail.jpg`,
  `santa-claus-conquers-the-martians.jpg`,
  `the-dance-of-life.jpg`,
  `the-great-flamarion.jpg`,
  `the-man-with-the-golden-arm.jpg`
];

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna,
non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.
Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae,
sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.
Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.
In rutrum ac purus sit amet tempus.`;

const genres = [
  `Comedy`,
  `Western`,
  `Musical`,
  `Detective`,
  `Drama`,
  `Cartoon`,
  `TV series`
];

const countries = [
  `USA`,
  `Belarus`,
  `Russia`,
  `France`,
  `Britain`,
  `Ukraine`
];

const ages = [
  `6+`,
  `12+`,
  `16+`,
  `18+`
];

const customerRanks = [
  {
    rating: 0,
    rank: `Novice`
  },
  {
    rating: 25,
    rank: `Layman`
  },
  {
    rating: 50,
    rank: `Professional`
  },
  {
    rating: 75,
    rank: `Expert`
  }
];

export {filmsTitles, posters, text, genres, customerRanks, COUNT_FILMS, COUNT_MOST_COMMENTED, COUNT_TOP_RATED, SHOWING_TASKS_COUNT_BY_BUTTON, SHOWING_TASKS_COUNT_ON_START, countries, ages};
