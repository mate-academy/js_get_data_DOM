'use strict';

const list = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');
const populationOfCountries = [...list].map(
  item => +item.innerHTML.split(',').join(''));
const totalPopulation = populationOfCountries.reduce((pop, acc) => acc + pop);
const averagePopulation = (totalPopulation / populationOfCountries.length);

total.innerHTML = totalPopulation.toLocaleString('en-US').split(' ');

console.log(totalPopulation.toLocaleString().split('').map(el => {
  console.log(!Number.isInteger(+el));
  if (!Number.isInteger(el)) {
    return ',';
  }

  return el;
}));
average.innerHTML = averagePopulation.toLocaleString('en-US');
