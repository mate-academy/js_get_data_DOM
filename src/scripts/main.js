'use strict';

const countriesPopulationElements = [
  ...document.querySelectorAll('span.population'),
];
const totalPopulationElement = document.querySelector('span.total-population');
const averagePopulationElement = document.querySelector(
  'span.average-population',
);
const totalPopulationValue = countriesPopulationElements.reduce(
  (prev, next) => {
    return prev + +next.innerHTML.replace(/,/g, '');
  },
  0,
);
const averagePopulationValue =
  totalPopulationValue / countriesPopulationElements.length;

totalPopulationElement.innerHTML = totalPopulationValue.toLocaleString('en-US');

averagePopulationElement.innerHTML =
  averagePopulationValue.toLocaleString('en-US');
