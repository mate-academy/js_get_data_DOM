'use strict';

const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

// let sum = 0;
// for (const item of population) {
//   sum += Number(item.innerText.split(',').join(''));
// }

const sum = [...population].reduce((acc, item) => {
  const populationNumber = Number(item.innerText.replace(/,/g, ''));

  return acc + populationNumber;
}, 0);

totalPopulation.innerText = sum.toLocaleString('en-US');

const avarage = sum / population.length;

averagePopulation.innerText = avarage.toLocaleString('en-US');
