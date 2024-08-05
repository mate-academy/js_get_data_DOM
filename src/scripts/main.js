'use strict';

const populationElement = document.getElementsByClassName('population');
const averagePopulationElement =
  document.getElementsByClassName('average-population');
const totalPopulationElement =
  document.getElementsByClassName('total-population');

const totalPopulation = [...populationElement].reduce(
  (prew, el) => prew + +el.innerHTML.replaceAll(',', ''),
  0,
);

const avrgPopulation = totalPopulation / [...populationElement].length;

averagePopulationElement[0].textContent =
  avrgPopulation.toLocaleString('en-US');
totalPopulationElement[0].textContent = totalPopulation.toLocaleString('en-US');
