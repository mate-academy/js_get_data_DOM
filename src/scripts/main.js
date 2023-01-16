'use strict';

const dataOfPopulation = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const listOfPopulation = [...dataOfPopulation].map(data =>
  +(data.innerText.replaceAll(',', '')));
const total = listOfPopulation.reduce((a, b) => a + b, 0);

const average = total / listOfPopulation.length;

totalPopulation.innerText = total.toLocaleString('en-GB');
averagePopulation.innerText = average.toLocaleString('en-GB');
