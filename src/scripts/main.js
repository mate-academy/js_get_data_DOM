'use strict';

const elements = document.querySelectorAll('.population');

const values = [];
let sum = 0;

let thousandSeparator = '';
const firstValue = elements[0]?.textContent.trim();
const match = firstValue?.match(/(\d)([^\d])\d{3}/);

if (match) {
  thousandSeparator = match[2];
}

for (const element of elements) {
  const valueText = element.textContent;
  let numberString = valueText;

  if (thousandSeparator) {
    numberString = valueText.split(thousandSeparator).join('');
  }

  const number = parseInt(numberString);

  if (!isNaN(number)) {
    values.push(number);
    sum += number;
  }
}

const averageValue = values.length > 0 ? sum / values.length : 0;

const totalElements = document.querySelectorAll('.total-population');
const averageElements = document.querySelectorAll('.average-population');

function formatNumber(n, separator) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}

const resultSum = formatNumber(sum, thousandSeparator);

const resultAverageValue = formatNumber(
  Math.round(averageValue),
  thousandSeparator,
);

for (const element of totalElements) {
  element.textContent = resultSum;
}

for (const element of averageElements) {
  element.textContent = resultAverageValue;
}
