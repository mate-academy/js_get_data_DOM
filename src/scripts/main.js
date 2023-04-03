'use strict';

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const population = document.querySelectorAll('.population');

function countTotalSum(populations) {
  return [...populations].reduce((sum, element) => (
    sum + +element.textContent.split(',').join('')
  ), 0);
}

function splitThousandByComa(number) {
  return number.toLocaleString('en-US');
}

const averageSum = countTotalSum(population) / population.length;

totalPopulation.textContent = splitThousandByComa(countTotalSum(population));
averagePopulation.textContent = splitThousandByComa(averageSum);
