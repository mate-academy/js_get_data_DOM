'use strict';

const populationsEls = document.querySelectorAll('.population');
const totalPopulationEl = document.querySelector('.total-population');
const averagePopulationEl = document.querySelector('.average-population');

let total = 0;

for (let i = 0; i < populationsEls.length; i++) {
  total += +populationsEls[i].textContent.split(',').join('');
}

const avarage = total / populationsEls.length;

totalPopulationEl.textContent = total.toLocaleString('en-US');
averagePopulationEl.textContent = avarage.toLocaleString('en-US');
