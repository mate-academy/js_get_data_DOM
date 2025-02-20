'use strict';

const totalPopulationElement =
  document.getElementsByClassName('total-population')[0];
const averagePopulationElement =
  document.getElementsByClassName('average-population')[0];
const populations = [...document.getElementsByClassName('population')];
const normalizedNumbers = populations.map(
  (el) => +el.innerHTML.split(',').join(''),
);

const nfObject = new Intl.NumberFormat('en-US');

const totalPopulation = normalizedNumbers.reduce(
  (prev, curr) => prev + curr,
  0,
);
const averagePopulation = +(totalPopulation / normalizedNumbers.length).toFixed(
  0,
);

totalPopulationElement.innerHTML = `${nfObject.format(totalPopulation)}`;
averagePopulationElement.innerHTML = `${nfObject.format(averagePopulation)}`;
