'use strict';

const population = document.querySelectorAll('.population');
const averagePopulation = document.querySelector('.average-population');
const total = document.querySelector('.total-population');

const sum = [...population].map((el) => {
  return Number(el.textContent.split(',').join(''));
});

const reduced = sum.reduce((acu, curr) => acu + curr, 0);

total.textContent = reduced.toLocaleString('en-US');

const calculateAveragePop = reduced / sum.length;

averagePopulation.textContent = calculateAveragePop.toLocaleString('en-US');
