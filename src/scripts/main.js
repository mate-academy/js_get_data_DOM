'use strict';

function collectPopulationData(className) {
  const elements = document.getElementsByClassName(className);

  const values = Array.from(elements)
    .map(el => Number(el.textContent.trim().replace(/,/g, '')))
    .filter(val => !isNaN(val));

  const count = values.length;
  const sum = values.reduce((acc, val) => acc + val, 0);
  const average = count > 0 ? sum / count : 0;

  return { count, sum, average };
}

document.addEventListener('DOMContentLoaded', () => {
  const { sum, average } = collectPopulationData('population');

  const sumElem = document.querySelector('.total-population');
  const avgElem = document.querySelector('.average-population');

  sumElem.textContent = sum.toLocaleString('en-US');
  avgElem.textContent = Math.round(average).toLocaleString('en-US');
});
