'use strict';

const population = document.body.querySelectorAll('.population');
const populationNumbers = Array.from(population).map(el => {
  const populationText = el.textContent.trim().replace(/,/g, '');

  return isNaN(populationText) ? 0 : parseInt(populationText, 10);
});

const totlalPopulation = populationNumbers.reduce((acc, val) => acc + val);
const avaragePopulation = totlalPopulation / populationNumbers.length;

const blockTotal = document.body.querySelector('.total-population');
const blockAverage = document.body.querySelector('.average-population');

blockTotal.textContent = totlalPopulation
  .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

blockAverage.textContent = avaragePopulation
  .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
