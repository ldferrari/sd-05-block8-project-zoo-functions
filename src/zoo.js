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

const { animals } = data;

const { employees } = data;

const { prices } = data;

const { hours } = data;

function animalsByIds(...ids) {
  const animalWithId = [];
  animals.forEach((animal, index) => {
    if (animal.id === ids[index]) {
      animalWithId.push(animal);
    }
  });
  return animalWithId;
}

function animalsOlderThan(animal, age) {
  const animalSelected = animals.filter(eachAnimal => eachAnimal.name === animal);
  return animalSelected[0].residents.every(ani => ani.age > age);
}

function employeeByName(employeeName) {
  return (employeeName == null) ?
  {} :
  employees.filter(({ firstName, lastName }) =>
  (firstName === employeeName || lastName === employeeName))[0];
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species) {
  const animalsTotal = {};
  animals.forEach(({ name, residents }) => (animalsTotal[name] = residents.length));
  return (species == null) ? animalsTotal : animalsTotal[species];
}

function entryCalculator(entrants = 0) {
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  return (entrants === {}) ? 0 :
  ((Adult * prices.Adult) + (Senior * prices.Senior) + (Child * prices.Child));
}

/*
Sem parâmetros, retorna animais categorizados por localização
Com opções especificadas, retorna nomes de animais
Com opções especificadas, retorna nomes de animais ordenados
Com opções especificadas, retorna somente nomes de animais macho/fêmea
Só retorna informações específicas de gênero se includeNames for setado

NE: [
        { lions: ['Zena', 'Maxwell', 'Faustino', 'Dee'] },
        { giraffes: ['Gracia', 'Antone', 'Vicky', 'Clay', 'Arron', 'Bernard'] }
      ],
*/

function animalMap(options) {
/*
  const regions = {};
  // create object with regions
  animals.forEach(
    ({ location }) =>
    {
      return (regions[location] = []);
    }
  );
  if (options !== undefined) {
    const { includeNames = false, sorted = false } = options;
    // add species to the object
  Object.keys(regions).forEach(region => {
    animals.forEach(({ name, location, residents }) => {
      if (location === region) {
        if (includeNames === true && sorted === false) {
          regions[location].push({ [name]: residents.map(( {name} ) => name) });
        } else if (includeNames === true && sorted === true) {
          regions[location].push({ [name]: residents.map(( {name} ) => name) });
          regions[location].forEach((animal, index) => {
            if (regions[location][index][name] !== undefined) {
              regions[location][index][name].sort();
            }
          });
        }
      }
    });
  });
  } else {
    Object.keys(regions).forEach(region => {
      animals.forEach(({ name, location, residents }) => {
        if (location === region) {
          return regions[location].push(name);
        }
      });
    });
  }
  return regions;
*/
}

// animalMap({includeNames: true, sorted: true})
// console.log(animalMap({includeNames: true, sorted: true}));

function schedule(dayName) {
  const readByHuman = {};
  const weekDays = Object.keys(hours);
  const workHours = Object.values(hours);
  workHours.forEach((hour) => {
    if (hour.close > 12) {
      hour.close -= 12;
    }
  });
  weekDays.forEach((day, index) => {
    if (day === 'Monday') {
      readByHuman[day] = 'CLOSED';
    } else {
      readByHuman[day] = `Open from ${workHours[index].open}am until ${workHours[index].close}pm`;
    }
  });
  return (dayName == null) ? readByHuman : { [dayName]: readByHuman[dayName] };
}

function oldestFromFirstSpecies(id) {
  const selectedEmployee = employees.filter(employee => employee.id === id);
  const firstSpecieId = selectedEmployee[0].responsibleFor[0];
  const selectedAnimal = animals.filter(animal => firstSpecieId === animal.id);
  const oldestResident = selectedAnimal[0].residents.sort((a, b) => b.age - a.age);
  const { name, sex, age } = oldestResident[0];
  return [name, sex, age];
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
