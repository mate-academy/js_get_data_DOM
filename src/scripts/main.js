'use strict';

// write your code here
const population = [...document.querySelector(`.population`)];
const countCountries = population.length();

population.forEach((item, i) => {
  item[i] = +item.split(',').join('');
});

const total = population.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
const average = total / countCountries;
const averagePopulation = document.querySelector('.average-population');
const totalPopulation = document.querySelector('.total-population');

averagePopulation.removeAttribute();
totalPopulation.removeAttribute();
totalPopulation.insertAdjacentElement(total);
averagePopulation.insertAdjacentElement(average);
