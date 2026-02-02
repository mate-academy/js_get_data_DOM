'use strict';

const populations = [...document.querySelectorAll('.population')];
const maxPopulation = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const numbers = populations.map((el) => {
  const text = el.textContent;

  return Number(text.replace(/\D/g, ''));
});

const maxPopulationNumber = numbers.reduce((acc, cur) => acc + cur, 0);

maxPopulation.textContent = maxPopulationNumber.toLocaleString('en-US');

const averagePopulationNum = Math.round(maxPopulationNumber / numbers.length);

average.textContent = averagePopulationNum.toLocaleString('en-US');
