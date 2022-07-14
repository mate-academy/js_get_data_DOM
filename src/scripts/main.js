'use strict';

const populationsEls = document.querySelectorAll('.population');
const totalPopulationEl = document.querySelector('.total-population');
const averagePopulationEl = document.querySelector('.average-population');

// let total = 0;

const popArray = [];

for (let i = 0; i < populationsEls.length; i++) {
  popArray.push(Number(populationsEls[i].textContent.split(',').join('')));
}

const total = popArray.reduce((acc, curr) => acc + curr);

const avarage = total / populationsEls.length;

totalPopulationEl.textContent = total.toLocaleString('en-US');
averagePopulationEl.textContent = avarage.toLocaleString('en-US');
