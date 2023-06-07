'use strict';

const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const total = [...population]
  .reduce((sum, el) => sum + +el.textContent.split(',').join(''), 0);
const average = total / [...population].length;

function toLocalString(number) {
  return number.toLocaleString('de-DE').split('.').join(',');
}

totalPopulation.innerHTML = toLocalString(total);
averagePopulation.innerHTML = toLocalString(average);
