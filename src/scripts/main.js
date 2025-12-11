'use strict';

const LOCALE = 'en-US';

const toLocale = (num) => num.toLocaleString(LOCALE);

const populationElements = [...document.querySelectorAll('.population')];

const populationValues = populationElements.map(
  (el) => +el.innerHTML.replaceAll(',', ''),
);

const totalPopulation = populationValues.reduce((acc, val) => acc + val, 0);
const averagePopulation = Math.round(totalPopulation / populationValues.length);

document.getElementsByClassName('total-population')[0].innerHTML =
  toLocale(totalPopulation);

document.getElementsByClassName('average-population')[0].innerHTML =
  toLocale(averagePopulation);
