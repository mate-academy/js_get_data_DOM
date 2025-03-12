'use strict';

const elements = [...document.querySelectorAll('span.population')];
const result = elements.reduce(
  (acc, item) => {
    acc.sum += +item.textContent.split(',').join('');
    acc.count += 1;

    return acc;
  },
  { sum: 0, count: 0 },
);

const spanTotal = document.querySelector('span.total-population');
const spanAverage = document.querySelector('span.average-population');

spanTotal.textContent = convertResult(String(result.sum));

spanAverage.textContent = convertResult(
  String(Math.round(result.sum / result.count)),
);

function convertResult(numberInString) {
  let count = 0;
  let correctResult = '';

  for (let i = numberInString.length - 1; i >= 0; i--) {
    if (count < 3) {
      correctResult = numberInString[i] + correctResult;
      count++;

      if (i === 0) {
        break;
      }
    }

    if (count >= 3) {
      count = 0;
      correctResult = ',' + correctResult;
    }
  }

  return correctResult;
}
