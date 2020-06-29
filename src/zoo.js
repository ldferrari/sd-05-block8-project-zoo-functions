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
  const filteredAnimals = [];
  ids.forEach(id => filteredAnimals.push(...animals.filter(animal => animal.id === id)));
  return filteredAnimals;
}

function animalsOlderThan(animal, idade) {
  const { residents } = data.animals.find(({ name }) => name === animal);
  return residents.every(({ age }) => age > idade);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find(emp => emp.firstName === employeeName || emp.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some(employee => employee.managers.find(item => item === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  const findAnimalId = id => employees.find(employee => employee.id === id).responsibleFor[0];
}

function entryCalculator(entrants) {
  const findAnimalArr = id => animals.find(animal => animal.id === findAnimalId(id));
}

function animalMap(options) {
  if (!options || !options.includeNames) return noParameter();
  console.log(options.includeNames, options.sorted, options.sex);
  if (options.sex) return especifySex(options.sex);
  return especifyOptions(options.sorted);
}

function schedule(dayName) {
  const scheduleHours = Object.assign({}, hours);
  Object.keys(scheduleHours).forEach((day) => {
    const open = scheduleHours[day].open;
    const close = scheduleHours[day].close;

    if (open === 0 || close === 0) scheduleHours[day] = 'CLOSED';
    else scheduleHours[day] = `Open from ${open}am until ${close - 12}pm`;
  });
  if (!dayName) return scheduleHours;
  return {
    [dayName]: scheduleHours[dayName],
  };
}

function oldestFromFirstSpecies(id) {
  const findEmployee = (idOrName) => {
    const employeeFound = employees.find((employee) => {
      const { id, firstName, lastName } = employee;
      if (id === idOrName || firstName === idOrName || lastName === idOrName) {
        return true;
      }
      return false;
    });
    return employeeFound;
  }
}

function increasePrices(percentage) {
  Object.keys(prices).forEach((key) => {
    prices[key] *= (1 + (percentage / 100));
    prices[key] = (Math.floor(Number((prices[key]) * 100) + 1) / 100).toFixed(2);
  });
}

function employeeCoverage(idOrName) {
  const person = employees.find(item => testIdOrName(idOrName, item));
  const personAn = person.responsibleFor.map(iD => animals.find(animal => animal.id === iD).name);
  const objectToReturn = {};
  objectToReturn[`${person.firstName} ${person.lastName}`] = personAn;
  return objectToReturn;
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