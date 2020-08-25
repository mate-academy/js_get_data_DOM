'use strict';

const populations = document.querySelectorAll('.population');

const arrayOfPopulations = [...populations]
  .map(elem => elem.innerText)
  .map(elem => elem.split(',').join(''));

const totalValue = arrayOfPopulations.reduce((accum, elem) => accum + +elem, 0);

document
  .getElementsByClassName('total-population')[0]
  .innerText = totalValue.toLocaleString('en-US');

document
  .getElementsByClassName('average-population')[0]
  .innerText = (totalValue / arrayOfPopulations.length).toLocaleString('en-US');
