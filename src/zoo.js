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

function searchObjAnimal(variavel, valor) {
  const objeto = data.animals.find((element) => {
    if (element[variavel] === valor) {
      return element;
    }
    return null;
  });
  return objeto;
}

function animalsByIds(...ids) {
  const array = [];
  ids.forEach((id) => {
    const objAnimal = searchObjAnimal('id', id);
    return array.push(objAnimal);
  });
  return array;
}

function animalsOlderThan(animal, age) {
  const animals = searchObjAnimal('name', animal);
  const residents = animals.residents;
  let result = true;
  residents.forEach((element) => {
    if (element.age < age) {
      result = false;
    } else {
      result = true;
    }
  });
  return result;
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const objEmployees = data.employees.find((element) => {
    if (element.firstName === employeeName || element.lastName === employeeName) {
      return element;
    }
    return null;
  });
  return objEmployees;
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}

function isManager(id) {
  const managers = data.employees.map(element => element.managers);
  let result = false;
  managers.forEach((element) => {
    if (result === false) {
      result = element.some(manager => manager === id);
    }
  });
  return result;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

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
