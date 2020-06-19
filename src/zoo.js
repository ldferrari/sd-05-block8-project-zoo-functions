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

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };
  data.employees.push(newEmployee);
}

function animalCount(species) {
  if (species === undefined) {
    let objAnimal = {};
    data.animals.forEach((element) => {
      objAnimal = { ...objAnimal, [element.name]: element.residents.length };
    });
    return objAnimal;
  }
  const animal = data.animals.find(element => element.name === species);
  return animal.residents.length;
}

function entryCalculator(entrants) {
  if (entrants === undefined || entrants === {}) {
    return 0;
  }
  let result = 0;
  result = entrants['Adult'] * data.prices['Adult'];
  result += entrants['Senior'] * data.prices['Senior'];
  result += entrants['Child'] * data.prices['Child'];
  return result;
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
