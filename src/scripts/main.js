'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const populationSpans = [...document.querySelectorAll('.population')];
  const totalPopulation = document.querySelector('.total-population');
  const averagePopulation = document.querySelector('.average-population');

  const populationValues = populationSpans.map((item) => {
    return +item.textContent.trim().replace(/,/g, '');
  });

  const total = populationValues.reduce((acc, item) => acc + item, 0);
  const average = total / populationValues.length;

  totalPopulation.textContent = total.toLocaleString('en-US');
  averagePopulation.textContent = average.toLocaleString('en-US');
});
