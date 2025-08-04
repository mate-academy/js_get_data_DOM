'use strict';

// write your code here

const populationElement = document.querySelectorAll('.population');
const population = Array.from(populationElement)
  .map((el) => Number(el.textContent.replace(/,/g, '')))
  .filter((num) => !isNaN(num));

const total = population.reduce((sum, num) => sum + num, 0);
const average = total / population.length;

const totalFormated = total.toLocaleString();
const averageFormated = Math.round(average).toLocaleString();

document.querySelector('.total-population').textContent = totalFormated;
document.querySelector('.average-population').textContent = averageFormated;
