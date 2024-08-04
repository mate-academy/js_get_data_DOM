'use strict';

const arrPrice = document.documentElement.querySelectorAll('.population');
// eslint-disable-next-line max-len
const totalPopulation =
  document.documentElement.querySelector('.total-population');
// eslint-disable-next-line max-len
const averagePopulation = document.documentElement.querySelector(
  '.average-population',
);
let total = 0;

for (let i = 0; i < arrPrice.length; i++) {
  const price = arrPrice[i].outerText;
  const intPrice = +price.split(',').join('');

  total = total + intPrice;
}

const average = total / arrPrice.length;

function getNumberSeparatedByCommas(number) {
  const strNumber = '' + number;
  const remainder = strNumber.length % 3;
  const arrResult = [];

  for (let i = 0; i < strNumber.length; ) {
    if (i === 0 && remainder > 0) {
      arrResult.push(strNumber.slice(0, remainder));
      i += remainder;
    }

    arrResult.push(strNumber.slice(i, i + 3));
    i += 3;
  }

  const result = arrResult.join(',');

  return result;
}

totalPopulation.innerHTML = getNumberSeparatedByCommas(total);
averagePopulation.innerHTML = getNumberSeparatedByCommas(average);
