'use strict';

const population = document.querySelectorAll('.population');

const numbers = [...population].map((value) => {
  return Number(value.textContent.replace(/[^\d]/g, ''));
});

const sum = numbers.reduce((a, b) => a + b, 0);
const avg = sum / numbers.length;

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.textContent = sum.toLocaleString('en-US');
averagePopulation.textContent = avg.toLocaleString('en-US');
