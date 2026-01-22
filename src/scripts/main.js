'use strict';

// write your code here

const populationElements = document.querySelectorAll('.population');

const populations = [...populationElements].map((el) => {
  const text = el.textContent.replace(/,/g, '');

  return Number(text);
});

const totalPopulation = populations.reduce((sum, value) => sum + value, 0);

const avaragePopulation = Math.round(totalPopulation / populations.length);

const formatedTotal = totalPopulation.toLocaleString('en-US');
const formatedAvarage = avaragePopulation.toLocaleString('en-US');

document.querySelector('.total-population').textContent = formatedTotal;
document.querySelector('.average-population').textContent = formatedAvarage;
