'use strict';

const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const arr = [...population].map((el) => {
  return Number(el.textContent.split(',').join(''));
});
const sum = arr.reduce((acu, curr) => acu + curr, 0);
const averageSum = sum / arr.length;

totalPopulation.textContent = sum.toLocaleString('en-US');
averagePopulation.textContent = averageSum.toLocaleString('en-US');
