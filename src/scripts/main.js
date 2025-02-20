'use strict';

const populations = document.querySelectorAll('.population');

const populationsArray = Array.from(populations)
  .map((el) => {
    Number(el.textContent.replace(/,/g, ''));
  })
  .filter((num) => !isNaN(num));

const totalPopulation = populationsArray.reduce((sum, val) => sum + val, 0);
const averagePopulation = Math.floor(totalPopulation / populationsArray.length);
const formatNumber = (num) => num.toLocaleString();

document.querySelector('.total-population').textContent =
  formatNumber(totalPopulation);

document.querySelector('.average-population').textContent =
  formatNumber(averagePopulation);
