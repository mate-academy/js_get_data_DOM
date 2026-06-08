'use strict';

const allFromSpanPopulation = [...document.querySelectorAll('span.population')]
  .map(span => span.textContent.replace(/,/g, ''))
  .filter(text => !isNaN(text) && text !== '')
  .map(Number);

const total = allFromSpanPopulation.reduce((acc, num) => acc + num, 0);
const average = Math.round(total / allFromSpanPopulation.length);

function formatNumber(num) {
  const str = String(num);
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (i > 0 && (str.length - i) % 3 === 0) {
      result += ',';
    }
    result += str[i];
  }

  return result;
}

document.querySelector('span.total-population').textContent =
  formatNumber(total);

document.querySelector('span.average-population').textContent =
  formatNumber(average);
