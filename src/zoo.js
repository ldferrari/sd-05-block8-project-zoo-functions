/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const data = require('./data');

const { animals, employees, prices, hours } = data;

function animalsByIds(...ids) {
  const animalsById = [];
  ids.forEach(id =>
    animalsById.push(...animals.filter(animal => animal.id === id)),
  );
  return animalsById;
}

function animalsOlderThan(animalName, age) {
  return animals
    .find(animal => animal.name === animalName)
    .residents.every(animal => animal.age > age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return employees.find(
    employee =>
      employee.firstName === employeeName || employee.lastName === employeeName,
  );
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some(
    employee => id === employee.managers.find(item => item === id),
  );
}

function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  const listaCompleta = (lista, { name, residents }) => {
    lista[name] = residents.length;
    return lista;
  };
  return species
    ? animals.find(animal => animal.name === species).residents.length
    : animals.reduce(listaCompleta, {});
}

//   const entrants = { 'Adult': 2, 'Child': 3, 'Senior': 1 };
function entryCalculator(entrants) {
  if (entrants === undefined || Object.entries(entrants).length === 0) return 0;
  // prettier-ignore
  const totalPrice = (total, priceByAge) =>
    total + (prices[priceByAge] * entrants[priceByAge]);
  return Object.keys(prices).reduce(totalPrice, 0);
}

function animalMap(options) {
  'oi';
}
// prettier-ignore
const setSchedule = () =>
  Object.keys(hours).forEach((dayValue) => {
    if (hours[dayValue].open > 0) {
      hours[dayValue] = `Open from ${hours[dayValue].open}am until ${
        hours[dayValue].close - 12
      }pm`;
    } else hours[dayValue] = 'CLOSED';
    return hours[dayValue];
  });

function schedule(dayName) {
  if (hours.Monday !== 'CLOSED') {
    setSchedule();
  }
  if (!dayName) return hours;
  let day = {};
  const selectedDay = Object.keys(hours);
  // prettier-ignore
  selectedDay.forEach((days) => {
    if (days === dayName) day = { [dayName]: hours[dayName] };
  });
  return day;
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function employeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
