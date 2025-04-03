'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const populationElements = document.querySelectorAll('.population');

  const populations = Array.from(populationElements).map(el => +el.textContent.replaceAll(',', ''));

  const totalPopulation = populations.reduce((sum, value) => sum + value, 0);
  const averagePopulation = totalPopulation / populations.length;

  const formatNumber = (num) => num.toLocaleString('en-US');

  document.querySelector('.total-population').textContent = formatNumber(totalPopulation);
  document.querySelector('.average-population').textContent=formatNumber(averagePopulation)

})

