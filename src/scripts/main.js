'use strict';

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const populationElements = document.querySelectorAll('.population');

const population = [...populationElements].reduce((totalNum, current) => {
  return totalNum + Number(current.textContent.replaceAll(',', ''));
}, 0);

total.textContent = population.toLocaleString();
average.textContent = (population / populationElements.length).toLocaleString();
