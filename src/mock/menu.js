const menuNames = [`All movies`, `Watchlist`, `History`, `Favorites`];

const generateMenu = () => {
  return menuNames.map((it) => {
    return {
      name: it,
      count: Math.floor(Math.random() * 10)
    }
  });
};

export {generateMenu};

