'use strict';

const populationNumbers = [...document.querySelectorAll('.population')]
  .map((span) => span.textContent.trim())
  .map((text) => text.replace(/[\s,. \u00A0]/g, ''))
  .filter((cleaned) => /^-?\d+$/.test(cleaned))
  .map(Number)
  .filter(Number.isFinite);

const total = populationNumbers.reduce((sum, num) => sum + num, 0);
const average = populationNumbers.length ? total / populationNumbers.length : 0;

const firstPopulation =
  document.querySelector('.population')?.textContent || '';
const groupCharMatch = firstPopulation.match(/[\s,. \u00A0](?=\d{3}(\D|$))/);
const groupChar = groupCharMatch ? groupCharMatch[0] : ',';

const formatWithGroupChar = (num) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, groupChar);

document.querySelector('.total-population').textContent =
  formatWithGroupChar(total);

document.querySelector('.average-population').textContent = formatWithGroupChar(
  Math.round(average),
);
