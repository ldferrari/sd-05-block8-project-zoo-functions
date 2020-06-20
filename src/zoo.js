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
  const NEAnimals = animals
    .filter((a) => a.location === "NE")
    .map((neAnim) => neAnim.name);
  const NWAnimals = animals
    .filter((a) => a.location === "NW")
    .map((neAnim) => neAnim.name);
  const SEAnimals = animals
    .filter((a) => a.location === "SE")
    .map((neAnim) => neAnim.name);
  const SWAnimals = animals
    .filter((a) => a.location === "SW")
    .map((neAnim) => neAnim.name);

  if (!options) {
    return {
      NE: NEAnimals,
      NW: NWAnimals,
      SE: SEAnimals,
      SW: SWAnimals,
    };
  }

  const { includeNames = false, sorted = false, sex } = options;

  if (includeNames) {
    // Constructing NE animmal with residents object
    let lionsNames = [];
    let giraffesNames = [];
    // Do array of lions and giraffes residents
    animals
      .filter((a) => a.location === "NE")
      .forEach((eIsAnimal) => {
        if (eIsAnimal.name === "lions") {
          eIsAnimal.residents.forEach((rrr) => {
            lionsNames.push(Object.values(rrr)[0]);
          });
        }
        if (eIsAnimal.name === "giraffes") {
          eIsAnimal.residents.forEach((rrr) => {
            giraffesNames.push(Object.values(rrr)[0]);
          });
        }
      });

    // NW area

    // Constructing NW animals
    let tigersNames = [];
    let bearsNames = [];
    let elephantsNames = [];

    animals
      .filter((a) => a.location === "NW")
      .forEach((eIsAnimal) => {
        if (eIsAnimal.name === "tigers") {
          eIsAnimal.residents.forEach((rrr) => {
            tigersNames.push(Object.values(rrr)[0]);
          });
        }
        if (eIsAnimal.name === "bears") {
          eIsAnimal.residents.forEach((rrr) => {
            bearsNames.push(Object.values(rrr)[0]);
          });
        }
        if (eIsAnimal.name === "elephants") {
          eIsAnimal.residents.forEach((rrr) => {
            elephantsNames.push(Object.values(rrr)[0]);
          });
        }
      });

    // SE area

    // Constructing SE animals
    let penguinsNames = [];
    let otterNames = [];

    animals
      .filter((a) => a.location === "SE")
      .forEach((eIsAnimal) => {
        if (eIsAnimal.name === "penguins") {
          eIsAnimal.residents.forEach((rrr) => {
            penguinsNames.push(Object.values(rrr)[0]);
          });
        }
        if (eIsAnimal.name === "otters") {
          eIsAnimal.residents.forEach((rrr) => {
            otterNames.push(Object.values(rrr)[0]);
          });
        }
      });

    // SE area

    // Constructing SW animals
    let frogNames = [];
    let snakesNames = [];

    animals
      .filter((a) => a.location === "SW")
      .forEach((eIsAnimal) => {
        if (eIsAnimal.name === "frogs") {
          eIsAnimal.residents.forEach((rrr) => {
            frogNames.push(Object.values(rrr)[0]);
          });
        }
        if (eIsAnimal.name === "snakes") {
          eIsAnimal.residents.forEach((rrr) => {
            snakesNames.push(Object.values(rrr)[0]);
          });
        }
      });

    if (!sex) {
      // ANCHOR Returns everything
      if (!sorted) {
        return {
          NE: [{ lions: lionsNames }, { giraffes: giraffesNames }],

          NW: [
            { tigers: tigersNames },
            { bears: bearsNames },
            { elephants: elephantsNames },
          ],
          SE: [{ penguins: penguinsNames }, { otters: otterNames }],
          SW: [{ frogs: frogNames }, { snakes: snakesNames }],
        };
      }

      if (sorted) {
        return {
          NE: [
            { lions: lionsNames.sort() },
            { giraffes: giraffesNames.sort() },
          ],

          NW: [
            { tigers: tigersNames.sort() },
            { bears: bearsNames.sort() },
            { elephants: elephantsNames.sort() },
          ],
          SE: [
            { penguins: penguinsNames.sort() },
            { otters: otterNames.sort() },
          ],
          SW: [{ frogs: frogNames.sort() }, { snakes: snakesNames.sort() }],
        };
      }
    }
    // SEX === female - refazer todas os arrays só com female

    if (sex === "female") {
      // Constructing NE animmal with residents object
      let lionsNames = [];
      let giraffesNames = [];
      // TODO Do array of lions and giraffes residents
      animals
        .filter((a) => a.location === "NE")
        .forEach((eIsAnimal) => {
          if (eIsAnimal.name === "lions") {
            eIsAnimal.residents.forEach((rrr) => {
              if (Object.values(rrr)[1] === "female") {
                lionsNames.push(Object.values(rrr)[0]);
              }
            });
          }
          if (eIsAnimal.name === "giraffes") {
            eIsAnimal.residents.forEach((rrr) => {
              if (Object.values(rrr)[1] === "female") {
                giraffesNames.push(Object.values(rrr)[0]);
              }
            });
          }
        });

      // NW area

      // Constructing NW animals
      let tigersNames = [];
      let bearsNames = [];
      let elephantsNames = [];

      animals
        .filter((a) => a.location === "NW")
        .forEach((eIsAnimal) => {
          if (eIsAnimal.name === "tigers") {
            eIsAnimal.residents.forEach((rrr) => {
              if (Object.values(rrr)[1] === "female") {
                tigersNames.push(Object.values(rrr)[0]);
              }
            });
          }
          if (eIsAnimal.name === "bears") {
            eIsAnimal.residents.forEach((rrr) => {
              if (Object.values(rrr)[1] === "female") {
                bearsNames.push(Object.values(rrr)[0]);
              }
            });
          }
          if (eIsAnimal.name === "elephants") {
            eIsAnimal.residents.forEach((rrr) => {
              if (Object.values(rrr)[1] === "female") {
                elephantsNames.push(Object.values(rrr)[0]);
              }
            });
          }
        });

      // SE area

      // Constructing SE animals
      let penguinsNames = [];
      let otterNames = [];

      animals
        .filter((a) => a.location === "SE")
        .forEach((eIsAnimal) => {
          if (eIsAnimal.name === "penguins") {
            eIsAnimal.residents.forEach((rrr) => {
              if (Object.values(rrr)[1] === "female") {
                penguinsNames.push(Object.values(rrr)[0]);
              }
            });
          }
          if (eIsAnimal.name === "otters") {
            eIsAnimal.residents.forEach((rrr) => {
              if (Object.values(rrr)[1] === "female") {
                otterNames.push(Object.values(rrr)[0]);
              }
            });
          }
        });

      // SE area

      // Constructing SW animals
      let frogNames = [];
      let snakesNames = [];

      animals
        .filter((a) => a.location === "SW")
        .forEach((eIsAnimal) => {
          if (eIsAnimal.name === "frogs") {
            eIsAnimal.residents.forEach((rrr) => {
              if (Object.values(rrr)[1] === "female") {
                frogNames.push(Object.values(rrr)[0]);
              }
            });
          }
          if (eIsAnimal.name === "snakes") {
            eIsAnimal.residents.forEach((rrr) => {
              if (Object.values(rrr)[1] === "female") {
                snakesNames.push(Object.values(rrr)[0]);
              }
            });
          }
        });

      return {
        NE: [{ lions: lionsNames }, { giraffes: giraffesNames }],

        NW: [
          { tigers: tigersNames },
          { bears: bearsNames },
          { elephants: elephantsNames },
        ],
        SE: [{ penguins: penguinsNames }, { otters: otterNames }],
        SW: [{ frogs: frogNames }, { snakes: snakesNames }],
      };
    }
  }

  if (sex === "female") {
    return {
      NE: NEAnimals,
      NW: NWAnimals,
      SE: SEAnimals,
      SW: SWAnimals,
    };
  }
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
