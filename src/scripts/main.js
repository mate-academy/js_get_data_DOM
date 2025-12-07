'use strict';

const numbersSpan = [...document.querySelectorAll('.population')];

/* eslint-disable function-paren-newline */
if (!checkIsEmpty(numbersSpan)) {
  const numbers = numbersSpan
    .map((i) => parseInt(i.innerText.replaceAll(',', ''), 10))
    .filter((i) => Number.isFinite(i));

  if (!checkIsEmpty(numbers)) {
    const sum = numbers.reduce((prev, item) => prev + item, 0);
    const avg = Math.round(sum / numbers.length);

    const total = document.querySelector('.total-population');
    const average = document.querySelector('.average-population');

    if (total) {
      total.innerText = toStringWithSeparator(sum);
    }

    if (average) {
      average.innerText = toStringWithSeparator(avg);
    }
  }
}

function toStringWithSeparator(number) {
  return new Intl.NumberFormat('en-US').format(number);
}

function checkIsEmpty(array) {
  if (array === null || array === undefined) {
    return true;
  }

  return array.length === 0;
}
