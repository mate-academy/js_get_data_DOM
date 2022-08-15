'use strict';

function normalizeNumber(str, separator) {
  let normalizeStr = '';
  const reversedStr = str.split('').reverse().join('');

  for (let i = 0; i < reversedStr.length; i++) {
    if (i % 3 === 0 && i !== 0) {
      normalizeStr += separator;
    }
    normalizeStr += reversedStr[i];
  }

  return normalizeStr.split('').reverse().join('');
}

const countriesPopulation = document.querySelectorAll('.population');
const total = [...countriesPopulation]
  .map(item => +item.textContent.split(',').join(''))
  .reduce((a, b) => a + b)
  .toString();

const average = (total / countriesPopulation.length).toString();

document.querySelector('.total-population')
  .textContent = normalizeNumber(total, ',');

document.querySelector('.average-population')
  .textContent = normalizeNumber(average, ',');
