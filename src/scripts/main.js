'use strict';

const dataOfPopulation = document.getElementsByClassName('population');

const valuesOfPopulation = [...dataOfPopulation]
  .map(element => +(element.textContent.replace(/,/g, '')));

const totalPopulation = valuesOfPopulation.reduce((acc, cur) => acc + cur);
const avaragePopulation = totalPopulation / valuesOfPopulation.length;

const numberFormat = new Intl.NumberFormat();

document.getElementsByClassName('total-population')[0]
  .textContent = numberFormat.format(totalPopulation);

document.getElementsByClassName('average-population')[0]
  .textContent = numberFormat.format(avaragePopulation);
