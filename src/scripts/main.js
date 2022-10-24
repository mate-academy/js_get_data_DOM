'use strict';

const population = document.querySelectorAll('.population');
const textData = [];

population.forEach(x => {
  textData.push(x.textContent);
});

let total = 0;

textData.forEach(y => {
  const number = y.split(',').join('');

  total += Number(number);
});

const average = total / textData.length;
const averagePopulation = document.querySelector('.average-population');
const totalPopulation = document.querySelector('.total-population');

averagePopulation.textContent = average.toLocaleString('en-US');
totalPopulation.textContent = total.toLocaleString('en-US');
