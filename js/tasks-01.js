import users from './users.js'; // eslint-disable-line

const getUserNames = users => {
  // не понял почему не работало с просто с фунцией?
  //вроде объявил переменую с названием и перебирающим методом который по функции юзер возвращает все имена юзеров! и сам уже понял потому что я не вернул переменную :)
  const usersNames = users.map(function(user) {
    return user.name;
  });
  return usersNames;
  // const usersName = users.map(user => user.name);
  // return usersName;
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
