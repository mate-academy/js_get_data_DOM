'use strict';

const populations = [...document.querySelectorAll('span.population')]
  .map(span => +span.textContent
    .split(',')
    .join(''));

const totalPop = populations.reduce((sum, pop) => sum + pop);
const averagePop = totalPop / populations.length;

const spanTotalPop = document.querySelector('span.total-population');
const spanAveragePop = document.querySelector('span.average-population');

spanTotalPop.innerHTML = totalPop.toLocaleString();
spanAveragePop.innerHTML = averagePop.toLocaleString();
