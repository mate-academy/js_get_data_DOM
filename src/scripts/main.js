'use strict';

const populationSpans = document.querySelectorAll('.population');

const populationsArray = [...populationSpans].map(span => {
  return +(span.textContent.split(',').join(''));
});

const totalPopulation = populationsArray.reduce((accum, current) => {
  return accum + current;
}, 0);

const averagePopulation = totalPopulation / populationsArray.length;

const separateByCommas = (array) => {
  const result = array;
  const firstComma = array.length % 3 === 0
    ? 3
    : array.length % 3;

  for (let i = firstComma; i < result.length; i += 3) {
    result.splice(i++, 0, ',');
  }

  return result;
};

const totalSpan = document.querySelector('.total-population');

totalSpan.textContent = separateByCommas(
  totalPopulation.toString().split('')
).join('');

const averageSpan = document.querySelector('.average-population');

averageSpan.textContent = separateByCommas(
  averagePopulation.toString().split('')
).join('');
