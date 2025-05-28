'use strict';

let sum = 0;

const population = [...document.querySelectorAll('.population')].map(
  (element) => {
    const num = +element.textContent.replaceAll(',', '');

    sum += num;

    return num;
  },
);

const average = Math.round(sum / population.length).toString();

sum = sum.toString();

const standartAverage = toStandartFormat(average);
const standartSum = toStandartFormat(sum);

document.querySelector('.total-population').textContent = standartSum;
document.querySelector('.average-population').textContent = standartAverage;

function toStandartFormat(number) {
  let res = '';

  for (let i = number.length - 1; i >= 0; i--) {
    res = number[i] + res;

    if ((number.length - i) % 3 === 0 && i !== 0) {
      res = ',' + res;
    }
  }

  return res;
}
