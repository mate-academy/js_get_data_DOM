'use strict';

const population = [...document.querySelectorAll('.population')];

const nums = population.map((node) => {
  const raw = node.textContent;
  const cleaned = raw.trim().replace(/[, ]+/g, '');
  const number = +cleaned;

  return number;
});

const valid = nums.filter(Number.isFinite);
let total = 0;
let average = 0;

total = valid.reduce((sum, value) => sum + value, 0);

average = valid.length ? total / valid.length : 0;

const formattedTotal = Math.round(total).toLocaleString();
const formattedAverage = Math.round(average).toLocaleString();

document.querySelector('.total-population').textContent = formattedTotal;
document.querySelector('.average-population').textContent = formattedAverage;
