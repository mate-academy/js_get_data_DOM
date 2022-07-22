'use strict';

const population = document.querySelectorAll('.population');
const numbers = [];

for (const elem of population) {
  const countText = elem.innerText;

  numbers.push(Number(countText.split(',').join('')));
}

const totalPopulation = document.querySelector('.total-population');
const avPopulation = document.querySelector('.average-population');

const total = numbers.reduce((sum, item) => sum + item, 0);
const average = numbers.reduce((sum, item) => sum + item, 0) / numbers.length;

totalPopulation.textContent = total.toLocaleString('en-EN');
avPopulation.textContent = average.toLocaleString('en-EN');
