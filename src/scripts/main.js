'use strict';

const populationElement = document.getElementsByClassName('population');
const avgPopulationElement =
  document.getElementsByClassName('average-population');
const sumPopulationElement =
  document.getElementsByClassName('total-population');

const sumPopulation = [...populationElement].reduce(
  (prew, el) => prew + +el.innerHTML.replaceAll(',', ''),
  0,
);
const avgPopulation = sumPopulation / [...populationElement].length;

avgPopulationElement[0].textContent = avgPopulation.toLocaleString('en-US');
sumPopulationElement[0].textContent = sumPopulation.toLocaleString('en-US');
