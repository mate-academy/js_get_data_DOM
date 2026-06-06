'use strict';

const allSpan = document.querySelectorAll('.population');
const items = [];

for (const item of allSpan) {
  items.push(item.textContent.replace(/,/g, ''));
}

const total = items.reduce((sum, item) => {
  return sum + Number(item);
}, 0);

const average = total / items.length;

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.textContent = total.toLocaleString();
averagePopulation.textContent = average.toLocaleString();
