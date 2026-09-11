'use strict';

// write your code here
const peoples = document.querySelectorAll('.population');

let result = 0;

peoples.forEach((population) => {
  const value = Number(population.textContent.replaceAll(',', ''));

  result += value;
});

const average = result / peoples.length;

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.textContent = result.toLocaleString('en-US');
averagePopulation.textContent = Math.round(average).toLocaleString('en-US');
