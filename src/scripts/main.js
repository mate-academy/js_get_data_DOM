'use strict';

const populationElements = document.querySelectorAll('.population');
const populationNumbers = Array.from(populationElements).map((el) => {
  const text = el.textContent;
  const cleaned = text.replace(/,/g, '').trim();

  return Number(cleaned);
});

const total = populationNumbers.reduce((sum, num) => sum + num, 0);
const average = total / populationNumbers.length;
const formatNumber = (num) => num.toLocaleString();

document.querySelector('.total-population').textContent = formatNumber(total);

document.querySelector('.average-population').textContent =
  formatNumber(average);
