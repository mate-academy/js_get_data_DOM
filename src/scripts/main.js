'use strict';

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const population = document.querySelectorAll('.population');

function totalSum(numbers) {
  let sum = 0;

  for (const pop of numbers) {
    const countryPopulation = pop.textContent.split(',').join('');

    sum += +countryPopulation;
  }

  return +sum;
}
totalSum(population);

function numberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const averageSum = totalSum(population) / population.length;

totalPopulation.textContent = numberWithCommas(totalSum(population));
averagePopulation.textContent = numberWithCommas(averageSum);
