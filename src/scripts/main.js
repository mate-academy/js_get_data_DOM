'use strict';

const population = document.querySelectorAll('.population');

const parsePopulation = [...population].map(data =>
  parseInt(data.textContent
    .split(',')
    .join(''))
);

const total = parsePopulation.reduce((init, next) => init + next, 0);

const average = total / parsePopulation.length;

const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

totalElement.textContent = total.toLocaleString();
averageElement.textContent = average.toLocaleString();
