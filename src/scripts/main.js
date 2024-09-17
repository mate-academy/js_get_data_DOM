'use strict';

let total = 0;

const calculateTotal = (num) => {
  total += num;
};

const populations = document.querySelectorAll('.population');

populations.forEach(population => {
  const populationNumber = Number(population.textContent.split(',').join(''));

  calculateTotal(populationNumber);
});

const average = total / populations.length;

const averageFormatted = average.toLocaleString('en-US');
const totalFormatted = total.toLocaleString('en-US');

const averagePopulation = document.querySelector('.average-population');
const totalPopulation = document.querySelector('.total-population');

averagePopulation.textContent = averageFormatted;
totalPopulation.textContent = totalFormatted;
