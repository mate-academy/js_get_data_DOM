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

totalPopulation.innerHTML = total.toLocaleString('en-US');
averagePopulation.innerHTML = average.toLocaleString('en-US');
