'use strict';

const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const avaragePopulation = document.querySelector('.average-population');

const arrPopulation = [...population]
  .map(item => +item.innerHTML
    .split(',')
    .join(''));
const resulTotalPop = arrPopulation.reduce((a, b) => a + b, 0);
const resultAveragePop = Math.round(resulTotalPop / arrPopulation.length);

totalPopulation.innerHTML = resulTotalPop.toLocaleString('en-US');
avaragePopulation.innerHTML = resultAveragePop.toLocaleString('en-US');
