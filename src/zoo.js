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

const { animals, employees, prices } = data; // object destructuring

function animalsByIds(...ids) {
  const output = [];
  ids.forEach((id) => {
    output.push(...animals.filter(animal => animal.id === id));
  });
  return output;
}

function animalsOlderThan(animal, age) {
  const filteredAnimals = animals.find(findAnimal => findAnimal.name === animal);
  const res = filteredAnimals.residents.every(otherAnimal => otherAnimal.age >= age);
  return res;
}

function employeeByName(employeeName) {
  if (employeeName === undefined) { return {}; }
  const filteredEmployee = employees.find(({ firstName, lastName }) =>
  firstName === employeeName || lastName === employeeName);
  return filteredEmployee;
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  const newEmployee =
    {
      id,
      firstName,
      lastName,
      managers,
      responsibleFor,
    };
  return newEmployee;
}

function isManager(id) {
  const filteredEmployees = employees.filter(employee => employee.managers.includes(id));
  return filteredEmployees.length > 0;
}

function addEmployee(id = '', firstName = '', lastName = '', managers = [], responsibleFor = []) {
  const newEmployeeAdd = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newEmployeeAdd);
}

function animalCount(species) {
  const numOfAnimalsObj = {};
  if (species === undefined) {
    animals.forEach((element) => {
      const numOfEach = element.residents.length;
      numOfAnimalsObj[element.name] = numOfEach;
    });
    return numOfAnimalsObj;
  }
  const findBySpecies = animals.find(element => element.name === species);
  const numOfAnimals = findBySpecies.residents.length;
  return numOfAnimals;
}

function entryCalculator(entrants) {
  if (typeof entrants === 'undefined') { return 0 }
  else if (typeof entrants === 'object'){
    if (Object.entries(entrants).length === 0){return 0};
  }  

  const adults = entrants['Adult'];
  const children = entrants['Child'];
  const seniors = entrants['Senior'];
  const total = (adults * prices['Adult'] + children * prices['Child'] + seniors * prices['Senior']);
  return total;
}

function animalMap(options) {
  
}

function schedule(dayName) {
  const scheduleObj = {
  'Tuesday': 'Open from 8am until 6pm',
  'Wednesday': 'Open from 8am until 6pm',
  'Thursday': 'Open from 10am until 8pm',
  'Friday': 'Open from 10am until 8pm',
  'Saturday': 'Open from 8am until 10pm',
  'Sunday': 'Open from 8am until 8pm',
  'Monday': 'CLOSED'
  }
  if (dayName === undefined) {return scheduleObj};
  const outputSchedule = {};
  outputSchedule[dayName] = scheduleObj[dayName];
  return outputSchedule;
}

console.log(schedule())

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
