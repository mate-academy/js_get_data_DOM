'use strict';

const allPopulation = document.querySelectorAll('span.population');

const populationArr = Array.from(allPopulation);

const populationMap = populationArr.map((el) =>
  el.textContent.trim().replace(/\D/g, ''));

const numbers = [];

for (const p of populationMap) {
  if (p.trim() !== '') {
    const n = Number(p);

    if (!Number.isNaN(n)) {
      numbers.push(n);
    }
  }
}

const totalPopulation = document.querySelector('span.total-population');
const averagePopulation = document.querySelector('span.average-population');

let total = numbers.reduce((acc, curValue) => acc + curValue, 0);

let average = Math.round(total / numbers.length);

total = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

average = average.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

totalPopulation.textContent = total;

averagePopulation.textContent = average;
