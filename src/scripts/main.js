'use strict';

function addCommasEveryThreeChars(text) {
  if (text.length <= 3) {
    return text;
  }

  return addCommasEveryThreeChars(text.slice(0, -3)) + ',' + text.slice(-3);
}

const populations = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const sum = Array.from(populations).reduce(
  (total, population) =>
    total + parseInt(population.textContent.replaceAll(',', '')),
  0,
);
let average = 0;

if (populations.length > 0) {
  average = sum / populations.length;
}

totalPopulation.textContent = addCommasEveryThreeChars(sum.toString());
averagePopulation.textContent = addCommasEveryThreeChars(average.toString());
