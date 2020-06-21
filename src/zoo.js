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
  return ids.map(id => animals.find(animal => animal.id === id));
}

function animalsOlderThan(animal, age) {
  const beastName = animals.find(beast => beast.name === animal);
  const beastAge = beastName.residents.every(beast => beast.age > age);

  return beastAge;
}

function employeeByName(employeeName) {
  if (!employeeName) return {};

  return employees.find(employee =>
    (employee.firstName === employeeName || employee.lastName === employeeName));
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const manager = employees.some(person => person.managers.includes(id) === true);

  return manager;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species) {
  const allAnimals = {};
  if (!species) {
    for (let i = 0; i < animals.length; i += 1) {
      allAnimals[animals[i].name] = animals[i].residents.length;
    }
    return allAnimals;
  }
  const animalCounter = animals.filter(animal => animal.name === species);

  return animalCounter[0].residents.length;
}

function entryCalculator(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) return 0;

  const pricing = Object.keys(prices);
  const revenue = (price, ticket) => price + (prices[ticket] * entrants[ticket]);

  return pricing.reduce(revenue, 0);
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  const workWeek = Object.keys(hours);
  const workDay = {};

  workWeek.forEach((day) => {
    if (day === 'Monday') workDay[day] = 'CLOSED';
    else workDay[day] = `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`;
  });

  if (!dayName) {
    return workDay;
  }

  return ({ [dayName]: workDay[dayName] });
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
