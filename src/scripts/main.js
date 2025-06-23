'use strict';

const populations = document.querySelectorAll('span.population');

let sumOfPopulation = 0;

for (let i = 0; i < populations.length; i++) {
  const str = populations[i].innerHTML;
  const arr = str.split(',');
  const population = +arr.join('');

  sumOfPopulation += population;
}

let averagePopulation = Math.round(sumOfPopulation / populations.length);

sumOfPopulation = '' + sumOfPopulation;

averagePopulation = '' + averagePopulation;

const total = sumOfPopulation.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
const avrPopulation = averagePopulation.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const spanTotalPopulation = document.querySelector('span.total-population');

spanTotalPopulation.innerHTML = total;

const spanAvrPopulation = document.querySelector('span.average-population');

spanAvrPopulation.innerHTML = avrPopulation;
