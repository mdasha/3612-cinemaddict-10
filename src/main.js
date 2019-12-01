const createProfileName = () => {
  return (
    '  <section class="header__profile profile">\n' +
    '    <p class="profile__rating">Movie Buff</p>\n' +
    '    <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">\n' +
    '  </section>'
  );
}

const createMenuTemplate = () => {
  return (
    '  <nav class="main-navigation">\n' +
    '    <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>\n' +
    '    <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">13</span></a>\n' +
    '    <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>\n' +
    '    <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>\n' +
    '    <a href="#stats" class="main-navigation__item main-navigation__item--additional">Stats</a>\n' +
    '  </nav>');
}

const createFilter = () => {
  return (
    '  <ul class="sort">\n' +
    '    <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>\n' +
    '    <li><a href="#" class="sort__button">Sort by date</a></li>\n' +
    '    <li><a href="#" class="sort__button">Sort by rating</a></li>\n' +
    '  </ul>'
  );
}

const createFilmTemplate = () => {
  return (
    '  <section class="films">\n' +
    '    <section class="films-list">\n' +
    '      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>\n' +
    '\n' +
    '      <div class="films-list__container"></div>' +
    '</section>' +
    '<section class="films-list--extra">' +
    '<h2 class="films-list__title">Top rated</h2>' +
    '<div class="films-list__container">' +
    ' </div>\n' +
    '    </section>' +
    '  <section class="films-list--extra">\n' +
    '      <h2 class="films-list__title">Most commented</h2>\n' +
    '\n' +
    '      <div class="films-list__container">' +
    '   </div>\n' +
    '    </section>\n' +
    '  </section>'
  );
}

const createFilmCardOne = () => {
  return (
    ' <article class="film-card">\n' +
    '          <h3 class="film-card__title">The Dance of Life</h3>\n' +
    '          <p class="film-card__rating">8.3</p>\n' +
    '          <p class="film-card__info">\n' +
    '            <span class="film-card__year">1929</span>\n' +
    '            <span class="film-card__duration">1h 55m</span>\n' +
    '            <span class="film-card__genre">Musical</span>\n' +
    '          </p>\n' +
    '          <img src="./images/posters/the-dance-of-life.jpg" alt="" class="film-card__poster">\n' +
    '          <p class="film-card__description">Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr…</p>\n' +
    '          <a class="film-card__comments">5 comments</a>\n' +
    '          <form class="film-card__controls">\n' +
    '            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>\n' +
    '            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>\n' +
    '            <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>\n' +
    '          </form>\n' +
    '        </article>');
}

const createFilmCardTwo = () => {
  return (
    '        <article class="film-card">\n' +
    '          <h3 class="film-card__title">Sagebrush Trail</h3>\n' +
    '          <p class="film-card__rating">3.2</p>\n' +
    '          <p class="film-card__info">\n' +
    '            <span class="film-card__year">1933</span>\n' +
    '            <span class="film-card__duration">54m</span>\n' +
    '            <span class="film-card__genre">Western</span>\n' +
    '          </p>\n' +
    '          <img src="./images/posters/sagebrush-trail.jpg" alt="" class="film-card__poster">\n' +
    '          <p class="film-card__description">Sentenced for a murder he did not commit, John Brant escapes from prison determined to find the real killer. By chance Brant\'s narrow escap…</p>\n' +
    '          <a class="film-card__comments">89 comments</a>\n' +
    '          <form class="film-card__controls">\n' +
    '            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist film-card__controls-item--active">Add to watchlist</button>\n' +
    '            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>\n' +
    '            <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>\n' +
    '          </form>\n' +
    '        </article>'
  );
}

const createFilmCardThree = () => {
  return (
    ' <article class="film-card">\n' +
    '          <h3 class="film-card__title">The Man with the Golden Arm</h3>\n' +
    '          <p class="film-card__rating">9.0</p>\n' +
    '          <p class="film-card__info">\n' +
    '            <span class="film-card__year">1955</span>\n' +
    '            <span class="film-card__duration">1h 59m</span>\n' +
    '            <span class="film-card__genre">Drama</span>\n' +
    '          </p>\n' +
    '          <img src="./images/posters/the-man-with-the-golden-arm.jpg" alt="" class="film-card__poster">\n' +
    '          <p class="film-card__description">Frankie Machine (Frank Sinatra) is released from the federal Narcotic Farm in Lexington, Kentucky with a set of drums and a new outlook on…</p>\n' +
    '          <a class="film-card__comments">18 comments</a>\n' +
    '          <form class="film-card__controls">\n' +
    '            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>\n' +
    '            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched film-card__controls-item--active">Mark as watched</button>\n' +
    '            <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>\n' +
    '          </form>\n' +
    '        </article>'
  );
}

const createFilmCardFour = () => {
  return (
    '  <article class="film-card">\n' +
    '          <h3 class="film-card__title">Santa Claus Conquers the Martians</h3>\n' +
    '          <p class="film-card__rating">2.3</p>\n' +
    '          <p class="film-card__info">\n' +
    '            <span class="film-card__year">1964</span>\n' +
    '            <span class="film-card__duration">1h 21m</span>\n' +
    '            <span class="film-card__genre">Comedy</span>\n' +
    '          </p>\n' +
    '          <img src="./images/posters/santa-claus-conquers-the-martians.jpg" alt="" class="film-card__poster">\n' +
    '          <p class="film-card__description">The Martians Momar ("Mom Martian") and Kimar ("King Martian") are worried that their children Girmar ("Girl Martian") and Bomar ("Boy Marti…</p>\n' +
    '          <a class="film-card__comments">465 comments</a>\n' +
    '          <form class="film-card__controls">\n' +
    '            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>\n' +
    '            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>\n' +
    '            <button class="film-card__controls-item button film-card__controls-item--favorite film-card__controls-item--active">Mark as favorite</button>\n' +
    '          </form>\n' +
    '        </article>'
  );
}

const createFilmCardFive = () => {
  return (
    ' <article class="film-card">\n' +
    '          <h3 class="film-card__title">Popeye the Sailor Meets Sindbad the Sailor</h3>\n' +
    '          <p class="film-card__rating">6.3</p>\n' +
    '          <p class="film-card__info">\n' +
    '            <span class="film-card__year">1936</span>\n' +
    '            <span class="film-card__duration">16m</span>\n' +
    '            <span class="film-card__genre">Cartoon</span>\n' +
    '          </p>\n' +
    '          <img src="./images/posters/popeye-meets-sinbad.png" alt="" class="film-card__poster">\n' +
    '          <p class="film-card__description">In this short, Sindbad the Sailor (presumably Bluto playing a "role") proclaims himself, in song, to be the greatest sailor, adventurer and…</p>\n' +
    '          <a class="film-card__comments">0 comments</a>\n' +
    '          <form class="film-card__controls">\n' +
    '            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist film-card__controls-item--active">Add to watchlist</button>\n' +
    '            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched film-card__controls-item--active">Mark as watched</button>\n' +
    '            <button class="film-card__controls-item button film-card__controls-item--favorite film-card__controls-item--active">Mark as favorite</button>\n' +
    '          </form>\n' +
    '        </article>\n' +
    '      </div>'
  );
}

const createButtonShowMore = () => {
  return (
    ' <button class="films-list__show-more">Show more</button>'
  );
}

const createTopRatedFilmOne = () => {
  return (
    '        <article class="film-card">\n' +
    '          <h3 class="film-card__title">The Man with the Golden Arm</h3>\n' +
    '          <p class="film-card__rating">9.0</p>\n' +
    '          <p class="film-card__info">\n' +
    '            <span class="film-card__year">1955</span>\n' +
    '            <span class="film-card__duration">1h 59m</span>\n' +
    '            <span class="film-card__genre">Drama</span>\n' +
    '          </p>\n' +
    '          <img src="./images/posters/the-man-with-the-golden-arm.jpg" alt="" class="film-card__poster">\n' +
    '          <p class="film-card__description">Frankie Machine (Frank Sinatra) is released from the federal Narcotic Farm in Lexington, Kentucky with a set of drums and a new outlook on…</p>\n' +
    '          <a class="film-card__comments">18 comments</a>\n' +
    '          <form class="film-card__controls">\n' +
    '            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>\n' +
    '            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched  film-card__controls-item--active">Mark as watched</button>\n' +
    '            <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>\n' +
    '          </form>\n' +
    '        </article>'
  );
}

const createTopRatedFilmTwo = () => {
  return (
    '<article class="film-card">\n' +
    '          <h3 class="film-card__title">The Great Flamarion</h3>\n' +
    '          <p class="film-card__rating">8.9</p>\n' +
    '          <p class="film-card__info">\n' +
    '            <span class="film-card__year">1945</span>\n' +
    '            <span class="film-card__duration">1h 18m</span>\n' +
    '            <span class="film-card__genre">Mystery</span>\n' +
    '          </p>\n' +
    '          <img src="./images/posters/the-great-flamarion.jpg" alt="" class="film-card__poster">\n' +
    '          <p class="film-card__description">The film opens following a murder at a cabaret in Mexico City in 1936, and then presents the events leading up to it in flashback. The Grea…</p>\n' +
    '          <a class="film-card__comments">12 comments</a>\n' +
    '          <form class="film-card__controls">\n' +
    '            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>\n' +
    '            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>\n' +
    '            <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>\n' +
    '          </form>\n' +
    '        </article>'
  );
}

const createMostCommentedFilmOne = () => {
  return (
    '        <article class="film-card">\n' +
    '          <h3 class="film-card__title">Santa Claus Conquers the Martians</h3>\n' +
    '          <p class="film-card__rating">2.3</p>\n' +
    '          <p class="film-card__info">\n' +
    '            <span class="film-card__year">1964</span>\n' +
    '            <span class="film-card__duration">1h 21m</span>\n' +
    '            <span class="film-card__genre">Comedy</span>\n' +
    '          </p>\n' +
    '          <img src="./images/posters/santa-claus-conquers-the-martians.jpg" alt="" class="film-card__poster">\n' +
    '          <p class="film-card__description">The Martians Momar ("Mom Martian") and Kimar ("King Martian") are worried that their children Girmar ("Girl Martian") and Bomar ("Boy Marti…</p>\n' +
    '          <a class="film-card__comments">465 comments</a>\n' +
    '          <form class="film-card__controls">\n' +
    '            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>\n' +
    '            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>\n' +
    '            <button class="film-card__controls-item button film-card__controls-item--favorite film-card__controls-item--active">Mark as favorite</button>\n' +
    '          </form>\n' +
    '        </article>'
  );
}

const createMostCommentedFilmTwo = () => {
  return (
    '        <article class="film-card">\n' +
    '          <h3 class="film-card__title">Made for Each Other</h3>\n' +
    '          <p class="film-card__rating">5.8</p>\n' +
    '          <p class="film-card__info">\n' +
    '            <span class="film-card__year">1939</span>\n' +
    '            <span class="film-card__duration">1h 32m</span>\n' +
    '            <span class="film-card__genre">Comedy</span>\n' +
    '          </p>\n' +
    '          <img src="./images/posters/made-for-each-other.png" alt="" class="film-card__poster">\n' +
    '          <p class="film-card__description">John Mason (James Stewart) is a young, somewhat timid attorney in New York City. He has been doing his job well, and he has a chance of bei…</p>\n' +
    '          <a class="film-card__comments">56 comments</a>\n' +
    '          <form class="film-card__controls">\n' +
    '            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>\n' +
    '            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>\n' +
    '            <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>\n' +
    '          </form>\n' +
    '        </article>'
  );
}

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
}

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = document.querySelector(`.header`);

render(siteMainElement, createMenuTemplate(), `beforeend`);
render(siteMainElement, createFilter(), `beforeend`);
render(siteHeaderElement, createProfileName(), `beforeend`);
render(siteMainElement, createFilmTemplate(), `beforeend`);

const filmListContainer = document.querySelector(`.films-list__container`);
const filmsList = document.querySelector(`.films-list`);

render(filmListContainer, createFilmCardOne(), `beforeend`);
render(filmListContainer, createFilmCardTwo(), `beforeend`);
render(filmListContainer, createFilmCardThree(), `beforeend`);
render(filmListContainer, createFilmCardFour(), `beforeend`);
render(filmListContainer, createFilmCardFive(), `beforeend`);
render(filmsList, createButtonShowMore(), `beforeend`);

const filmsListExtra = document.querySelectorAll('.films-list--extra .films-list__container');

render(filmsListExtra[0], createTopRatedFilmOne(), `beforeend`);
render(filmsListExtra[0], createTopRatedFilmTwo(), `beforeend`);

render(filmsListExtra[1], createMostCommentedFilmOne(), `beforeend`);
render(filmsListExtra[1], createMostCommentedFilmTwo(), `beforeend`);

