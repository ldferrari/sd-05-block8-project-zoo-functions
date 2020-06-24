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
const { animals, employees, prices, hours } = require('./data');

function animalsByIds(id1, id2) {
  // seu código aqui
  if (id1 === 0 && id2 === 0) {
    return [];
  }
  const arrayAnimals = (animals.filter(animal =>
  (animal.id === id1) + (animal.id === id2)));
  return arrayAnimals;
}

function animalsOlderThan(animalName, minAge) {
  // seu código aqui
  const animalSelec = (animals.find(animalS => animalS.name === animalName));
  const idade = (animalSelec.residents.every(animalAge => animalAge.age > minAge));
  return idade;
}

function employeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  const emplByName = employees.find(employee =>
  (employee.firstName === employeeName) || (employee.lastName === employeeName));
  return emplByName;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  const onjetoEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return onjetoEmployee;
}

function isManager(id) {
  // seu código aqui
  const manager = employees.some(empregado => empregado.managers.find(gerente => gerente === id));
  return manager;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmpregado = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  const pushEmpl = employees.push(newEmpregado);
  return pushEmpl;
}

function animalCount(species) {
  // seu código aqui

  const allSpecies = animals.reduce(((lista, { name, residents }) => {
    lista[name] = residents.length;
    return lista;
  }), {});

  const oneEspecie = animals.find(animal => animal.name === species);

  return species ? oneEspecie.residents.length : allSpecies;
}

function entryCalculator(entrants) {
  // seu código aqui

  if (entrants === undefined || Object.entries(entrants).length < 1) {
    return 0;
  }
  const total = Object.keys(prices).reduce((vTotal, faixaEtaria) =>
  vTotal + (entrants[faixaEtaria] * prices[faixaEtaria]), 0);

  return total;
}

function animalMap(options) {
  const zonas = ['NE', 'NW', 'SE', 'SW'];
  const objetoSaida = {};
  function nomeLocal() {
    zonas.forEach(zona => objetoSaida[zona] = animals.filter(local =>
      local.location === zona).map(objeto => objeto.name));
    return objetoSaida;
  }
  if (options === undefined) return nomeLocal();
  const { includeNames = false, sorted = false, sex = '' } = options;
  if (includeNames === true && sex === '') {
    zonas.forEach(zona => objetoSaida[zona] = animals.filter(local =>
      local.location === zona).map((objeto) => {
        const tipo = {};
        if (includeNames === true && sorted === true) {
          tipo[objeto.name] = objeto.residents.map(nome => nome.name).sort();
          return tipo;
        }
        tipo[objeto.name] = objeto.residents.map(nome => nome.name);
        return tipo;
      }));
    return objetoSaida;
  }
  if (includeNames === true && sex !== '') {
    zonas.forEach(zona => objetoSaida[zona] = animals.filter(local =>
      local.location === zona).map((objeto) => {
        const tipo = {};
        tipo[objeto.name] = objeto.residents.filter(resdent =>
        resdent.sex === sex).map(nome => nome.name);
        return tipo;
      }));
    return objetoSaida;
  }
  if (includeNames === false && sex !== '') return nomeLocal();
  return animalMap;
}

function schedule(dayName) {
  // seu código aqui
  const diaHorairo = {};
  Object.keys(hours).forEach((dia) => {
    if (dia === 'Monday') {
      diaHorairo[dia] = 'CLOSED';
    } else {
      diaHorairo[dia] = `Open from ${hours[dia].open}am until ${hours[dia].close - 12}pm`;
    }
  });
  if (dayName === undefined) return diaHorairo;
  const umDia = {};
  umDia[dayName] = diaHorairo[dayName];
  return umDia;
}
console.log(schedule());
console.log(schedule('Monday'));

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
