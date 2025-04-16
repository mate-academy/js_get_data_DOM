'use strict';

function toFormat(number) {
  return number
    .toString()
    .split('')
    .reverse()
    .map((num, index) => {
      return index % 3 === 0 && index !== 0 ? num + ',' : num;
    })
    .reverse()
    .join('');
}

const population = [...document.querySelectorAll('.population')];
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

let total = 0;

for (const elem of population) {
  const number = Number(elem.textContent.split(',').join(''));

  if (typeof number !== 'number') {
    continue;
  }

  total += number;
}

const average = Math.round(total / population.length);

totalPopulation.innerHTML = toFormat(total);
averagePopulation.innerHTML = toFormat(average);
