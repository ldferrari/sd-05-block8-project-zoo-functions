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

function animalsByIds(...ids) {
  if (!ids) return [];
  return data.animals.filter(({ id }) => ids.includes(id));
}

function animalsOlderThan(animal, idade) {
  const { residents } = data.animals.find(({ name }) => name === animal);
  return residents.every(({ age }) => age > idade);
}

function employeeByName(employeeName) {
  // seu código aqui
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  const schedule = (dayName) => {
    if (dayName !== undefined) {
      return { [dayName]: checkDate(hours[dayName].open, hours[dayName].close) };
    }
    return fullschedule();
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
    // seu código aqui
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
  }
