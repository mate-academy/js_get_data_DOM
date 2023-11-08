'use strict';

// write your code here
const population = document.querySelectorAll('population');
const numberOfCountries = document.querySelectorAll('.list__item');
const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

let allPopulation = 0;

for (const people of population) {
  const countryPopulation = people.innerText;

  allPopulation += +countryPopulation.replace(/,/g, '');
};

const averagePopulation = allPopulation / numberOfCountries.length;

totalElement.textContent = allPopulation.toLocaleString('en-US');
averageElement.textContent = averagePopulation.toLocaleString('en-US');
