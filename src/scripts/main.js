'use strict';

const population = document.querySelectorAll('.population');

const getTotalSum = (expectedResult) => {
  let total = 0;
  let result = '';

  population.forEach((populationContent) => {
    let num = '';

    for (let i = 0; populationContent.textContent.length >= i; i++) {
      if (
        Number(populationContent.textContent[i]) ||
        Number(populationContent.textContent[i]) === 0
      ) {
        num += populationContent.textContent[i];
      }
    }

    total += Number(num);
  });

  const arrayOfNum = total.toString().split('');

  for (let i = arrayOfNum.length - 1; i >= 0; i--) {
    if (i % 3 === 0 && i !== arrayOfNum.length - 1) {
      result += ',';
      result += arrayOfNum[i];
    } else {
      result += arrayOfNum[i];
    }
  }

  result = result.split('').reverse().join('');

  if (expectedResult === 'total') {
    return result;
  }

  result = result.split(',').join('');
  result = Math.round(Number(result) / population.length);

  const arrayOfNumAvarage = result.toString().split('');

  result = '';

  for (let i = arrayOfNumAvarage.length - 1; i >= 0; i--) {
    if (i === 5 || i === 2) {
      result += ',';
      result += arrayOfNumAvarage[i];
    } else {
      result += arrayOfNumAvarage[i];
    }
  }

  result = result.split('').reverse().join('');

  return result;
};

document.querySelector('.total-population').textContent = getTotalSum('total');
document.querySelector('.average-population').textContent = getTotalSum('');
