'use strict';

const dataOfPopulation = document.querySelectorAll('.population');
const listOfPopulation = [...dataOfPopulation].map(data =>
  +(data.innerText.replaceAll(',', '')));

const total = listOfPopulation.reduce((a, b) => a + b, 0);
const average = total / listOfPopulation.length;

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.innerText = total.toLocaleString('en');
averagePopulation.innerText = average.toLocaleString('en');
