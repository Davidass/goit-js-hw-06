import users from './users.js'; // eslint-disable-line

const getUserNames = users => {
  // не понял почему не работало с просто с фунцией?
  // const usersNames = users.map(function(user) {
  //   return user.name;
  // });
  // console.log(usersNames);
  const usersName = users.map(user => user.name);
  return usersName;
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
