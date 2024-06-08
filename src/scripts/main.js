/* eslint-disable no-console */
'use strict';

let population = [...document.querySelectorAll('.population')];

population = population.map((v) => convertToNumber(v.innerHTML));

function convertToNumber(value) {
  return parseInt(value.replace(/,/g, ''), 10);
}

const totalPopulation = population.reduce((v1, v2) => v1 + v2);

const avgPopulation = totalPopulation / population.length;

const totalContainer = document.querySelector('.total-population');
const avgContainer = document.querySelector('.average-population');

function formatTheNumberForDisplay(number) {
  return number.toLocaleString('en-US');
}

totalContainer.innerHTML = formatTheNumberForDisplay(totalPopulation);
avgContainer.innerHTML = formatTheNumberForDisplay(avgPopulation);
