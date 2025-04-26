'use strict';

const populationValues = [];

document.querySelectorAll('span.population').forEach((node) => {
  const text = node.textContent;

  const convertedText = Number(text.split(',').join(''));

  if (isNaN(convertedText)) {
    return;
  }

  populationValues.push(convertedText);
});

function getTotal(values) {
  let sum = 0;

  for (let i = 0; i < values.length; i++) {
    sum = sum + values[i];
  }

  return sum;
}

const total = getTotal(populationValues);
const average = Math.ceil(total / populationValues.length);

document.querySelector('.total-population').textContent =
  total.toLocaleString();

document.querySelector('.average-population').textContent =
  average.toLocaleString();
