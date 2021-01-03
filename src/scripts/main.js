'use strict';

const population = document.querySelectorAll('span.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');
const populationArr = [];

for (let i = 0; i < population.length; i++) {
  const peopleAmount = population[i].innerText.split(',').join('');

  if (!isNaN(peopleAmount)) {
    populationArr[i] = +peopleAmount;
  }
}

const populationTotal = populationArr.reduce((sum, a) => sum + a);
const populationAveradge = populationTotal / populationArr.length;

total.innerText = `${populationTotal.toLocaleString()}`;
average.innerText = `${populationAveradge.toLocaleString()}`;
