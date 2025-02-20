'use strict';

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const population = document.querySelectorAll('.population');

let total = [...population]
  .map(item => +item.textContent.replace(/,/g, ''))
  .reduce((sum, item) => sum + item);

let average = total / population.length;

const changeNumberToString = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

total = changeNumberToString(total);
average = changeNumberToString(average);

totalPopulation.textContent = total;
averagePopulation.textContent = average;
