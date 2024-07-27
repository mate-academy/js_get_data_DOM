'use strict';

const arrayPopulation = [...document.querySelectorAll('.population')];
const arrayPopulationNumber = arrayPopulation
  .map((item) => item.textContent)
  .map((str) => str.split(','))
  .map((arrStr) => arrStr.map((el) => (Number.isFinite(+el) ? el : '0')))
  .map((arr) => +arr.join(''));

const total = arrayPopulationNumber.reduce((sum, n) => sum + n, 0);

const average = total / arrayPopulationNumber.length;

document.querySelector('.total-population').textContent =
  convertNumberToString(total);

document.querySelector('.average-population').textContent =
  convertNumberToString(average);

function convertNumberToString(value, bitness = 1000) {
  const arr = [];
  const bit = bitness;

  const number = Number.isFinite(+value) ? +value : 0;

  function getArrayRemainder(num) {
    let n = num;

    if (n > 0) {
      arr.push(Math.floor(n % bit));
      n = Math.floor(n / bit);

      return getArrayRemainder(n);
    } else {
      return arr.reverse();
    }
  }

  getArrayRemainder(number);

  return arr.join(',');
}
