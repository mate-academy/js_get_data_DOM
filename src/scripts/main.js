'use strict';

const populationSpan = [...document.querySelectorAll('.population')];

const population = populationSpan.map((span) =>
  span.textContent.split(',').join(''));

let totalPopulation = population.reduce((prev, curr) =>
  (Number(curr) + prev), 0);

let averagePopulation = totalPopulation / population.length;

const callback = (prev, item, index, arr) => {
  let result = prev;
  const isComma = ((arr.length - index) % 3 === 0);

  if (isComma) {
    result += ',';
  }

  result += item;

  return result;
};

totalPopulation = totalPopulation.toString().split('').reduce(callback);
averagePopulation = averagePopulation.toString().split('').reduce(callback);

document.querySelector('.average-population').textContent = averagePopulation;
document.querySelector('.total-population').textContent = totalPopulation;
