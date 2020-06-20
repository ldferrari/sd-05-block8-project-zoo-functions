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

const data = require("./data");
const { animals, employees, prices, hours } = require("./data");

function animalsByIds(...ids) {
  // seu código aqui
  const animaux = [];
  ids.forEach((idArgument) =>
    animaux.push(...animals.filter((animal) => animal.id === idArgument))
  );
  return animaux;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const findSpecies = animals.find((anim) => anim.name === animal);
  const checkAge = findSpecies.residents.every((res) => res.age >= age);
  return checkAge;
}

function employeeByName(employeeName) {
  // seu código aqui
  const isStaff = employees.find(
    (person) =>
      person.firstName === employeeName || person.lastName === employeeName
  );
  return isStaff || {};
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return { id, firstName, lastName, managers, responsibleFor };
}

function isManager(id) {
  // seu código aqui
  const managerOrNot = employees.some((person) =>
    person.managers.find((ids) => ids === id)
  );
  return managerOrNot;
}

function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = []
) {
  // seu código aqui
  const newStaff = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newStaff);
}

function animalCount(species) {
  // seu código aqui
  // preparar retorno de num de residentes quando param species é name
  // preparar retorno de objeto acumulando species quando n tem param species
  // condicionar o retorno de um ou outro dependendo da existência de param species
  const findByName = animals.find((animal) => animal.name === species);
  const all = (list, { name, residents }) => {
    list[name] = residents.length;
    return list;
  };
  return species ? findByName.residents.length : animals.reduce(all, {});
}

function entryCalculator(entrants) {
  // seu código aqui
  // condicionar para retornar 0 se entrants n existir ou for um objeto vazio
  if (entrants === undefined || Object.entries(entrants).length === 0) {
    return 0;
  }
  // nos outros casos, tem que retornar quantidade*preço para cada idade
  // sabendo que quantidade tà no entrants e preço no prices
  // os dois são objetos, os dois com mesmas chaves de idades
  const accPrice = (base, eachAge) =>
  base + entrants[eachAge] * prices[eachAge];
  const arrayPrices = Object.keys(prices);
  return arrayPrices.reduce(accPrice, 0);
  // precisa do segundo param 0 para determinar que é number
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
  // 1. preparar retorno para cada dia quando tiver um dayName
    const eachDayWithinObject = Object.keys(hours);
    let ifDay = {};
    eachDayWithinObject.forEach((day) => {
      if (day === dayName) {
        ifDay = { dayName : `Open from ${day.open} until ${day.close}pm` }
      }
  });
  return ifDay;
  // // 2. preparar retorno para todo dia quando n tiver dayName
  // let allDays = {};
  // cuidado monday, if dayName = monday, valor da propriedade é 'CLOSED'
  // if other day, adicionar valor com template literals
  // template string retornado serà `Open from ${dayName.open} until ${datName.close}pm`
  // vai ter que criar nova propriedade a cada dia dentro do objeto allDays retornado
  // // 3. condicionar retorno final
  // return dayName ? ifDay : allDays;
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