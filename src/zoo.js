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
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  let result = 0;
  result = entrants.Adult * data.prices.Adult;
  result += entrants.Senior * data.prices.Senior;
  result += entrants.Child * data.prices.Child;
  return result;
}

function getResidentsNames(nameAnimal, sex = undefined) {
  let getObj = searchObjAnimal('name', nameAnimal);
  let arrayResidents = [];
  if (sex !== undefined) { 
    getObj = getObj.residents;
    const objFiltered = getObj.filter(element => element.sex === sex);
    arrayResidents = objFiltered.map(element => element.name);
  } else {
    arrayResidents = getObj.residents.map(element => element.name);
  }
  
  return arrayResidents;
}

function animalMap(options) {
  (options === undefined) ? options = {} : options;
  const {includeNames = false, sorted = false, sex = undefined} = options;
  let result = {};
  let optionsMap = ['NE', 'NW', 'SE', 'SW'];
  optionsMap.forEach(element => {
    let animalsList = [];
    let arrayAnimais = [];
    data.animals.forEach(animal => {    
      if (animal.location === element && includeNames === false) {
        animalsList.push(animal.name);
        result = {...result, [element]: animalsList};
      }
      if (animal.location === element && includeNames === true) {
        let listNames = getResidentsNames(animal.name, sex);
        if (sorted === true) {
          listNames.sort();
        }
        let objetoAnimal = {[animal.name]: [...listNames]};
        arrayAnimais.push(objetoAnimal);
      }
    });
    console.log(arrayAnimais);
    element = {element:[]};
    element.push(arrayAnimais)
    result = {...result, element};
    
  });
  return result;
}
//console.log(animalMap({ includeNames: true, sorted: true}));

function schedule(dayName) {
  if (dayName === undefined) {
    const daysWeek = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
    let scheduleInform = {'Tuesday': '', 'Wednesday': '', 'Thursday': '', 'Friday': '', 'Saturday': '', 'Sunday': '', 'Monday': ''};
    daysWeek.forEach((day) => {
      if (data.hours[day].open !== 0 && data.hours[day].close !== 0) {
        scheduleInform[day] = `Open from ${data.hours[day].open}am until ${data.hours[day].close - 12}pm`;
      } else {
        scheduleInform[day] = 'CLOSED';
      }
      
    });
    return scheduleInform;
  }
}
console.log(schedule());

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
