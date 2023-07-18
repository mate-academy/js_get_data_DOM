'use strict';

const population = document.getElementsByClassName('population');
const populationStrings = [];
let total = 0;

for (let i = 0; i < population.length; i++) {
  const string = population[i].innerText.replace(new RegExp(',', 'g'), '');

  populationStrings.push(Number(string));
  total += populationStrings[i];
}

const average = total / population.length;

const totalNumber = parseInt(total).toLocaleString('en-US');
const totalAverage = parseInt(average).toLocaleString('en-US');

document.querySelector('.total-population').innerText = totalNumber;
document.querySelector('.average-population').innerText = totalAverage;
