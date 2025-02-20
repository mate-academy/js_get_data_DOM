'use strict';

const populationsAll = document.body.children[0].children[1].children;
let total = 0;
let amountOfCountries = 0;

for (const el of populationsAll) {
  const population = (el.children[1].textContent);
  const populationNum = +(population.replace(/,/g, ''));

  total += populationNum;
  amountOfCountries += 1;
}

const average = (total / amountOfCountries).toLocaleString('en-US');
const totalWithSeparator = total.toLocaleString('en-US');
const totalPopulation = document.querySelector('.total-population');

totalPopulation.innerHTML = totalWithSeparator;

const averagePopulation = document.querySelector('.average-population');

averagePopulation.innerHTML = average;
// write your code here
