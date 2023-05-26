'use strict';

let total = 0;

const calculateTotal = (num) => {
  total += num;
};

const populations = document.querySelectorAll('.population');

populations.forEach(el => {
  const number = Number(el.textContent.split(',').join(''));

  calculateTotal(number);
});

const average = total / populations.length;

const averageFormatted = average.toLocaleString('en-US');
const totalFormatted = total.toLocaleString('en-US');

const averagePopulation = document.querySelector('.average-population');
const totalPopulation = document.querySelector('.total-population');

averagePopulation.textContent = averageFormatted;
totalPopulation.textContent = totalFormatted;
