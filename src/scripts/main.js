'use strict';

const populationList = document.querySelectorAll('.population');
const populations = [...populationList];

let total = 0;

populations.forEach((population) => {
  const popText = population.textContent.replace(/,/g, '');
  const numericPop = Number(popText);

  if (!isNaN(numericPop)) {
    total += numericPop;
  }
});

const average = total / populations.length;

document.querySelector('.total-population').textContent
= total.toLocaleString('en-US');

document.querySelector('.average-population').textContent
= average.toLocaleString('en-US');
