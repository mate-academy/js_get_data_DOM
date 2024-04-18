'use strict';

const populations = document.querySelectorAll('span.population');
const averagePopulationSpan = document.querySelector('span.average-population');
const totalPopulationSpan = document.querySelector('span.total-population');

const total = [...populations].reduce((sum, p) => {
  const val = +p.textContent.split(',').join('');

  return sum + val;
}, 0);

const avarage = (total / populations.length).toLocaleString('en-US');

averagePopulationSpan.textContent = avarage;
totalPopulationSpan.textContent = total.toLocaleString('en-US');
