'use strict';

const numbersArray = [...document.querySelectorAll('.population')].map(
  el => el.innerHTML);

const normalizeNumber = function normalizeNumber(numbers) {
  const noComa = numbers.map(el => el.replaceAll(',', ''));

  const arrOfNum = noComa.map(str => Number(str));

  return arrOfNum;
};

const sum = normalizeNumber(numbersArray).reduce((accumulator, value) => {
  return accumulator + value;
}, 0);

const average = sum / normalizeNumber(numbersArray).length;

const totalPopulation = document.querySelector('.total-population').innerHTML
= `${sum.toLocaleString('en-US')}`;

const avrPopulation = document.querySelector('.average-population').innerHTML
= `${average.toLocaleString('en-US')}`;

normalizeNumber(numbersArray);

return totalPopulation && avrPopulation;
