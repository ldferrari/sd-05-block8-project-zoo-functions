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
const { animals, employees } = require('./data');

function animalsByIds(...ids) {
  /* let filter=[]
  if ( ids === undefined){
    return filter;
  } else if (ids) {
   filter = ids.forEach(index => animals.filter(element => element.id === index))
   .reduce((acc, value) => acc + value)
    return filter
  }
  } */
}

function animalsOlderThan(animal, age1) {
  const newArray = animals.filter(element => element.name === animal);
  const verifyAge = newArray.every(item => item.residents.every(key => key.age >= age1));
  return verifyAge;
}

function employeeByName(employeeName = {}) {
  employees.forEach((element) => {
    if (element.firstName === employeeName) {
      obj = element;
    } else if (element.lastName === employeeName) {
      obj = element;
    }
  });
  return obj;
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = Object.assign({}, personalInfo, associatedWith);
  return newEmployee;
}

function isManager(id) {
  const verifyEach = employees.map(element => element.managers.includes(id));
  const veryfy = verifyEach.some(element => element === true);
  return veryfy;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEMployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  }
  employees.push(newEMployee);
  return employees;
}
//addEmployee('39800c14-4b76-454a-858d-2f8d168146a7', 'John', 'Doe');

function animalCount(species) {
  // seu código aqui
}

function entryCalculator(entrants) {
  // seu código aqui
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
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
