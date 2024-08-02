'use strict';

const populationElement = document.getElementsByClassName('population');
const averPopulationElement =
  document.getElementsByClassName('average-population');
const sumPopulationElement =
  document.getElementsByClassName('total-population');

const sumPopulation = [...populationElement].reduce(
  (prew, el) => prew + +el.innerHTML.replaceAll(',', ''),
  0,
);
const avrgPopulation = sumPopulation / [...populationElement].length;

averPopulationElement[0].textContent = avrgPopulation.toLocaleString('en-US');
sumPopulationElement[0].textContent = sumPopulation.toLocaleString('en-US');
