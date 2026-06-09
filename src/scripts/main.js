'use strict';

const spanCollection = [...document.querySelectorAll('span.population')];

const countriesPopulation = spanCollection.map((span) => {
  return Number(span.textContent.replaceAll(',', ''));
});

const totalNumber = countriesPopulation.reduce(
  (sum, population) => sum + population,
  0,
);

const averageNumber = totalNumber / countriesPopulation.length;

function thousandSeparator(number, separator = 3) {
  const digits = String(number).split('');

  for (let i = digits.length - separator; i > 0; i -= separator) {
    digits.splice(i, 0, ',');
  }

  return digits.join('');
}

const totalSpan = document.querySelector('span.total-population');
const averageSpan = document.querySelector('span.average-population');

totalSpan.textContent = thousandSeparator(totalNumber);
averageSpan.textContent = thousandSeparator(averageNumber);
