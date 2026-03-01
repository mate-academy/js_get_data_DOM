'use strict';

const population = document.querySelectorAll('.population');

const getTotalSum = (expectedResult) => {
  let total = 0;
  let result = '';

  population.forEach((populationContent) => {
    let num = '';

    for (let i = 0; populationContent.textContent.length > i; i++) {
      if (
        Number(populationContent.textContent[i]) ||
        Number(populationContent.textContent[i]) === 0
      ) {
        num += populationContent.textContent[i];
      }
    }

    total += Number(num);
  });

  result = total.toLocaleString();

  if (expectedResult === 'total') {
    return result;
  }

  result = Math.round(Number(total) / population.length);

  result = result.toLocaleString();

  return result;
};

document.querySelector('.total-population').textContent = getTotalSum('total');
document.querySelector('.average-population').textContent = getTotalSum('');
