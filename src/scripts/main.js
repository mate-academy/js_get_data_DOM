'use strict';

const population = document.querySelectorAll('span.population');

const arrOfPopulation = [...population].map(num =>
  Number(num.innerText.replace(/[,]/g, '')));

const totalPopulation = arrOfPopulation.reduce((num, sum) => num + sum);

const averagePopulation = totalPopulation / arrOfPopulation.length;

document.querySelector('span.average-population').innerHTML
    = averagePopulation.toLocaleString('en-US');

document.querySelector('span.total-population').innerHTML
    = totalPopulation.toLocaleString('en-US');
