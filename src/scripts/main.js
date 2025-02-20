'use strict';

const populationsEl = document.querySelectorAll('.population');
const populations = [...populationsEl];

const totalNum = populations
  .map((el) => el.innerHTML.replaceAll(',', ''))
  .reduce((sum, item) => +sum + +item, 0);

const averageNum = Math.round(totalNum / populations.length);

const total = totalNum.toLocaleString('en-US');
const average = averageNum.toLocaleString('en-US');

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.innerHTML = total;
averagePopulation.innerHTML = average;
