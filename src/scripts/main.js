'use strict';

const allPopulation = document.querySelectorAll('.population');

const population = [];

allPopulation.forEach((el) => {
  population.push(el.textContent);
});

const converted = population.map((item) => Number(item.replace(/,/g, '')));

let total = 0;

for (let i = 0; i < converted.length; i++) {
  total += converted[i];
}

const average = Math.floor(total / converted.length);

const totalText = document.querySelector('.total-population');

totalText.textContent = total.toLocaleString('en-US');

const averageText = document.querySelector('.average-population');

averageText.textContent = average.toLocaleString('en-US');
