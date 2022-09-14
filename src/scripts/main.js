'use strict';

const population = [...document.body.querySelectorAll('.population')]
  .map(item => +item.textContent.replace(/,/g, ''));
const totalPopulation = population.reduce((sum, current) => sum + current, 0);
const averagePopulation = totalPopulation / population.length;

document.body.querySelector('.total-population').textContent
  = getThousandsSeparator(totalPopulation, ',');

document.body.querySelector('.average-population').textContent
  = getThousandsSeparator(averagePopulation, ',');

function getThousandsSeparator(number, separator) {
  let numberString = number.toString();
  const thousands = [];

  while (numberString.length > 0) {
    thousands.unshift(numberString.slice(-3));
    numberString = numberString.slice(0, -3);
  }

  return thousands.join(separator);
}
