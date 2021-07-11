'use strict';

// write your code here
const elements = document.querySelectorAll('.population');
const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');
const populationList = [...elements].map(el => {
  return +el.textContent.replace(/,/g, '');
});
const totalPopulation = populationList.reduce((acc, country) => {
  return acc + country;
}, 0);
const averagePopulation = totalPopulation / populationList.length;

totalElement.textContent = totalPopulation.toLocaleString('en-US');
averageElement.textContent = averagePopulation.toLocaleString('en-US');
