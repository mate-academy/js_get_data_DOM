'use strict';

const arrElemPopulations = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const arrPopulations = [...arrElemPopulations]
  .map(elem => +elem.textContent.split(',').join(''));
const total = arrPopulations.reduce((a, b) => a + b, 0);
const average = total / arrPopulations.length;

totalPopulation.innerText = total
  .toLocaleString('en-US');

averagePopulation.innerText = average
  .toLocaleString('en-US');
