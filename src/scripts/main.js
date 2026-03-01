'use strict';

const population = document.querySelectorAll('.population');

const getTotalSum = (expectedResult) => {
  let total = 0;
  let result = '';

  population.forEach((populationContent) => {
    const numberString = populationContent.textContent.replace(/,/g, '');

    total += Number(numberString);
  });

  result = total.toLocaleString();

  if (expectedResult === 'total') {
    return result;
  }

  result = Math.round(total / population.length);

  result = result.toLocaleString();

  return result;
};

const totalResult = getTotalSum('total');
const avarage = getTotalSum('');

document.querySelector('.total-population').textContent = totalResult;
document.querySelector('.average-population').textContent = avarage;
