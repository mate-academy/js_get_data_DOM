'use strict';

const parsePopulation = (text) =>
  /^\d+$/.test(text.replace(/,/g, '').trim())
    ? parseInt(text.replace(/,/g, '').trim(), 10)
    : 0;

const calculateTotalAndAverage = (numbers) => {
  const totalSum = numbers.reduce((acc, curr) => acc + curr, 0);
  const averageValue = Math.round(totalSum / numbers.length);

  return { total: totalSum, average: averageValue };
};

const formatNumber = (number) =>
  number.toLocaleString('en-US', { maximumFractionDigits: 0 });

const updateTextContent = (selector, value) => {
  const element = document.querySelector(selector);

  if (element) {
    element.textContent = value;
  }
};

const populationNumbers = Array.from(document.querySelectorAll('.population'))
  .map((el) => el.textContent)
  .map(parsePopulation);

const { total, average } = calculateTotalAndAverage(populationNumbers);

updateTextContent('.total-population', formatNumber(total));
updateTextContent('.average-population', formatNumber(average));
