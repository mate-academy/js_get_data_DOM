'use strict';

const populations = document.querySelectorAll('.population');

const populationsArr
  = [...populations].map(item => +item.innerHTML.replaceAll(',', ''));

const totalPopulation
  = populationsArr.reduce((accum, population) => accum + population);

const averagePopulation = totalPopulation / populationsArr.length;

const total = document.querySelector('.total-population');

const average = document.querySelector('.average-population');

total.innerText = totalPopulation.toLocaleString('en-US');

average.innerText = averagePopulation.toLocaleString('en-US');
