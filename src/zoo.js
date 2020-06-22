/*
eslint no-unused-vars: [
  'error',
  {
    'args': 'none',
    'vars': 'local',
    'varsIgnorePattern': 'data'
  }
]
*/

const data = require('./data');
const { employees, prices } = require('./data');

function animalsByIds(a, b) {
  const arrayFiltered = data.animals.filter(
    (selected) => selected.id === a || selected.id === b
  );
  return arrayFiltered;
}

function animalsOlderThan(animal, age) {
  const animalsFilter = data.animals.filter(
    (selected) => selected.name === animal
  );
  const isOlder = animalsFilter[0].residents.every(
    (element) => element.age >= age
  );
  return isOlder;
}

function employeeByName(employeeName) {
  const employees = data.employees.filter(
    (employee) =>
      employee.firstName === employeeName || employee.lastName === employeeName
  );
  return employees[0] !== undefined ? employees[0] : {};
}

function createEmployee(personalInfo, associatedWith) {
  return (employee = { ...personalInfo, ...associatedWith });
}

function isManager(id) {
  const isManager = data.employees.some(
    (manager) => manager.managers.includes(id) === true
  );
  return isManager;
}

function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = []
) {
  const employee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(employee);
}

function animalCount(species) {
  let dataAnimalObj = {};
  const dataAnimals = data.animals;

  if (species === undefined) {
    for (let i = 0; i < dataAnimals.length; i += 1) {
      dataAnimalObj[dataAnimals[i].name] = dataAnimals[i].residents.length;
    }
    return dataAnimalObj;
  }

  const count = data.animals.filter((element) => element.name === species);
  return count[0].residents.length;
}

function entryCalculator(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) return 0;

  const totalPrice = Object.keys(prices).reduce(
    (result, element) => result + prices[element] * entrants[element],
    0
  );
  return totalPrice;
}

function animalMap(
  options = { includeNames: false, sorted: false, sex: ['male', 'female'] }
) {
  const obj = { NE: [], NW: [], SE: [], SW: [] };
  for (let region in obj) {
    let eachRegion = data.animals.filter(
      (animal) => animal.location === region
    );
    if (options.includeNames !== true)
      obj[region] = eachRegion.map((animal) => animal.name);
    if (options.includeNames === true)
      eachRegion.forEach((animal) => {
        let generalAnimal = animal.name;
        let names = animal.residents.map((nomes) => nomes.name);
        if (options.sex === 'female') {
          let femeas = animal.residents.filter((sexo) => sexo.sex === 'female');
          names = femeas.map((nome) => nome.name);
        }

        if (options.sorted === true) names.sort();
        obj[region].push({ [generalAnimal]: names });
      });
  }

  return obj;
}

function schedule(dayName) {
  let schedule = {};
  for (let day in data.hours) {
    if (day === 'Monday') {
      schedule[day] = 'CLOSED';
    } else {
      schedule[day] = `Open from ${data.hours[day].open}am until ${
        data.hours[day].close - 12
      }pm`;
    }
  }

  if(dayName !== undefined) return { [dayName] : schedule[dayName] }
  return schedule;
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
