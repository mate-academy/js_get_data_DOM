'use strict';

const populations = [...document.querySelectorAll('.population')];

const numbers = populations.map((population) => {
  return Number(population.textContent.split(',').join(''));
});

function calculateTotal() {
  return numbers.reduce((acc, number) => acc + number, 0);
}

function calculateAverage() {
  return Math.round(calculateTotal() / numbers.length);
}

const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

totalElement.textContent = calculateTotal().toLocaleString('en-US');
averageElement.textContent = calculateAverage().toLocaleString('en-US');
