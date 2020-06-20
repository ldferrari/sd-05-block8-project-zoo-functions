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
const { animals, employees, prices } = require('./data');

function animalsByIds(...ids) {
  if (!ids) return [];

  const [id1, id2] = ids;
  const arr = animals.filter(animal => animal.id === id1 || animal.id === id2);

  return arr;
}

function animalsOlderThan(animal, age) {
  const otters = animals.find(animales => animales.name === 'otters');

  const isOlder = otters.residents.every(resident => resident.age >= age);

  return isOlder;
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find(em => (em.firstName === employeeName || em.lastName === employeeName));
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;

  return { id, firstName, lastName, managers, responsibleFor };
}

function isManager(id) {
  return employees.some(emp => emp.managers.some(man => man === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const lastEmployeeee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };

  employees.push(lastEmployeeee);
}


function animalCount(species) {
  const names1 = animals.map(ani => ani.name);
  const numOfResidents = animals.map(ani => ani.residents.length);

  const objConstr = {};
  names1.forEach((names, i) => (objConstr[names] = numOfResidents[i]));

  if (!species) return objConstr;

  return animals.find(an => an.name === species).residents.length;
}

function entryCalculator(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  const { Adult, Child, Senior } = entrants;
 
  // TODO
  const { Adult : Aprice, Child : Cprice, Senior : Sprice } = prices;

  return (Adult * Aprice) + (Child * Cprice) + (Senior * Sprice);
}

function animalMap(options) {
  const NEAnimals = animals.filter(a => a.location === 'NE').map(neAnim => neAnim.name);
  const NWAnimals =  animals.filter(a => a.location === 'NW').map(neAnim => neAnim.name);
  const SEAnimals =  animals.filter(a => a.location === 'SE').map(neAnim => neAnim.name);
  const SWAnimals =  animals.filter(a => a.location === 'SW').map(neAnim => neAnim.name);

  if (!options) {
    return {
      NE: NEAnimals,
      NW: NWAnimals,
      SE: SEAnimals,
      SW: SWAnimals,
    };
  }

  const { includeNames = false} = options;

  if (includeNames) {
    //Extracting lion and giraffe from NEANIMALS array
    // [lionsVAR, giraffesVAR] = NEAnimals;

    // Constructing NE animmal with residents object
    let lionsNames = [];   
    // Do array of lions residents
    animals.filter((a) => a.location === "NE").forEach((eIsLion) => {
        if (eIsLion.name === 'lions') {
          lionsNames = eIsLion.residents;
        }
      });
    //Extracting residents name
    [lion1, lion2, lion3, lion4] = lionsNames;
    const { name: lion1name } = lion1;
    const { name: lion2name } = lion2;
    const { name: lion3name } = lion3;
    const { name: lion4name } = lion4;

    // ANCHOR Constructing NE animmal with residents object
    let giraffesNames = [];   
    // Do array of lions residents
    animals.filter((a) => a.location === "NE").forEach((eIsGIF) => {
        if (eIsGIF.name === 'giraffes') {
          giraffesNames = eIsGIF.residents;
        }
      });
    //Extracting residents name
    [gif1, gif2, gif3, gif4, gif5, gif6] = giraffesNames;
    const { name: gif1name } = gif1;
    const { name: gif2name } = gif2;
    const { name: gif3name } = gif3;
    const { name: gif4name } = gif4;
    const { name: gif5name } = gif5;
    const { name: gif6name } = gif6;

    // FIXME NW area 

    // Constructing penguins


    // ANCHOR Returns everything
    return {
      NE: [
        {lions: [lion1name, lion2name, lion3name, lion4name]},
        {giraffes: [gif1name, gif2name, gif3name, gif4name, gif5name, gif6name]},
      ],
      
      NW: [
        { tigers: [] },
        { bears: [] },
        { elephants: [] }
      ],
      // SE: [
      //   { penguins: ['Joe', 'Tad', 'Keri', 'Nicholas'] },
      //   { otters: ['Neville', 'Lloyd', 'Mercedes', 'Margherita'] }
      // ],
      // SW: [
      //   { frogs: ['Cathey', 'Annice'] },
      //   { snakes: ['Paulette', 'Bill'] }
      // ]

    };
  }




// Com opções especificadas, retorna nomes de animais
// Com opções especificadas, retorna nomes de animais ordenados
// Com opções especificadas, retorna somente nomes de animais macho/fêmea
// Só retorna informações específicas de gênero se includeNames for setado
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
