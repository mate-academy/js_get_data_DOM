'use strict';

function insertСommas(str) {
  let result = '';
  let counter = 0;

  for (let i = str.length - 1; i >= 0; i--) {
    result = str[i] + result;
    counter++;

    if (counter % 3 === 0 && counter !== str.length) {
      result = ',' + result;
    }
  }

  return result;
};

const items = [...document.querySelectorAll('span.population')];

let total = 0;
let average = 0;

for (const item of items) {
  const number = +item.textContent.trim().split(',').join('');

  total += number;
}

average = String(Math.floor(total / items.length));
average = insertСommas(average);
total = insertСommas(String(total));

const totalPopulation = document.querySelector('span.total-population');

totalPopulation.textContent = total;

const averagePopulation = document.querySelector('span.average-population');

averagePopulation.textContent = average;
