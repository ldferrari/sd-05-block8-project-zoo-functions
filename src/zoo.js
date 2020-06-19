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

function searchObjAnimal(animalName) {
  const objAnimal = data.animals.find((element) => {
    if (element.name === animal) {
      return element;
    }
    return null;
  });
  return objAnimal;
}

function animalsByIds(...ids) {
  const array = [];
  ids.forEach((id) => {
    const objAnimal = data.animals.find((element) => {
      if (element.id === id) {
        return element;
      }
      return null;
    });
    return array.push(objAnimal);
  });
  return array;
}

function animalsOlderThan(animal, age) {
  const animals = data.animals.find((element) => {
    if (element.name === animal) {
      return element;
    }
    return null;
  });
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
  });
  return objEmployees;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
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
