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
  const arrFiltered = data.animals.filter(selected => selected.id === a || selected.id === b);
  return arrFiltered;
}

function animalsOlderThan(animal, age) {
  const test = data.animals.filter(selected => selected.name === animal);
  const isOlder = test[0].residents.every(animaL => animaL.age >= age);
  return isOlder;
}

function employeeByName(name) {
  const info = data.employees;
  const arr = info.filter(a => a.firstName === name || a.lastName === name);
  return arr[0] !== undefined ? arr[0] : {};
}

function createEmployee(personalInfo, associatedWith) {
  const obj = { ...personalInfo, ...associatedWith };
  return obj;
}

function isManager(id) {
  const test = data.employees.some(a => a.managers.includes(id) === true);
  return test;
}

function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) {
  const obj = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(obj);
}

function animalCount(species) {
  const animalsCount = {};
  const animalD = data.animals;
  if (species === undefined) {
    for (let i = 0; i < data.animals.length; i += 1) {
      animalsCount[animalD[i].name] = animalD[i].residents.length;
    }
    return animalsCount;
  }
  const test = data.animals.filter(selected => selected.name === species);
  return test[0].residents.length;
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

function animalMap(options = { includeNames: false, sorted: false, sex: ['male', 'female']}) {
  const obj = { NE: [], NW: [], SE: [], SW: [] };
  for (const region in obj) {
    const eachRegion = data.animals.filter(animal => animal.location === region);
    if (options.includeNames !== true) {
      obj[region] = eachRegion.map(animal => animal.name);
    }
    if (options.includeNames === true) {
      eachRegion.forEach(animal => {
        let generalAnimal = animal.name;
        let names = animal.residents.map(nomes => nomes.name);
        if (options.sex === 'female') {
          let femeas = animal.residents.filter(sexo => sexo.sex === 'female');
          names = femeas.map(nome => nome.name);
        }

        if (options.sorted === true) names.sort();
        obj[region].push({ [generalAnimal]: names });
      })}
  }

  return obj;
}

function schedule(dayName) {
  let schedule = {};
  for (let day in data.hours) {
    if (day === 'Monday') {
      schedule[day] = `CLOSED`;
    } else {
      schedule[day] = `Open from ${data.hours[day].open}am until ${
        data.hours[day].close - 12
      }pm`;
    }
  }
  if (dayName !== undefined) return { [dayName]: schedule[dayName] };
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
