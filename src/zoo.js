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

function animalsByIds(a, b) {
  const arrayFiltered = data.animals.filter(selected => selected.id === a || selected.id === b);
  return arrayFiltered;
}

function animalsOlderThan(animal, age) {
  const animalsFilter = data.animals.filter(selected => selected.name === animal);
  const isOlder = animalsFilter[0].residents.every(element => element.age >= age);
  return isOlder;
}

function employeeByName(employeeName) {
  const employees = data.employees.filter(employee => employee.firstName === employeeName || employee.lastName === employeeName);
  return employees[0] !== undefined ? employees[0] : {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const isManagers = data.employees.some(manager => manager.managers.includes(id) === true);
  return isManagers;
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
  const dataAnimalObj = {};
  const dataAnimals = data.animals;

  if (species === undefined) {
    for (let i = 0; i < dataAnimals.length; i += 1) {
      dataAnimalObj[dataAnimals[i].name] = dataAnimals[i].residents.length;
    }
    return dataAnimalObj;
  }

  const count = data.animals.filter(element => element.name === species);
  return count[0].residents.length;
}

function entryCalculator(entrants) {
  let totalPrice = 0;
  if (entrants === undefined || entrants === {}) return totalPrice;
  const adultPrice = data.prices.Adult;
  const seniorPrice = data.prices.Senior;
  const childPrice = data.prices.Child;
  if (entrants.Adult !== undefined) totalPrice += entrants.Adult * adultPrice;
  if (entrants.Senior !== undefined) {
    totalPrice += entrants.Senior * seniorPrice;
  }
  if (entrants.Child !== undefined) totalPrice += entrants.Child * childPrice;
  return totalPrice;
}

function animalMap(
  options = { includeNames: false, sorted: false, sex: ['male', 'female'] }
) {
  const obj = { NE: [], NW: [], SE: [], SW: [] };
  const allRegion = Object.keys(obj);
  allRegion.forEach((region) => {
    const eachRegion = data.animals.filter(animal => animal.location === region);
    if (options.includeNames !== true)
      obj[region] = eachRegion.map( animal => animal.name);
    if (options.includeNames === true)
      eachRegion.forEach( animal => {
        const generalAnimal = animal.name;
        let names = animal.residents.map( nomes => nomes.name);
        if (options.sex === 'female') {
          const femeas = animal.residents.filter( sexo => sexo.sex === 'female');
          names = femeas.map(nome => nome.name);
        }

        if (options.sorted === true) {names.sort()};
        obj[region].push({ [generalAnimal]: names });
      });
  });

  return obj;
}

function schedule(dayName) {
  const schedules = {};
  const Alldays = Object.keys(data.hours);
  Alldays.forEach((day)=> {
    if (day === 'Monday') {
      schedules[day] = 'CLOSED';
    } else {
      schedules[day] = `Open from ${data.hours[day].open}am until ${
        data.hours[day].close - 12
      }pm`;
    }
  });

  if (dayName !== undefined) return { [dayName]: schedules[dayName] };
  return schedules;
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
