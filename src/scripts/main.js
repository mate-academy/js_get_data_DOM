'use strict';

const NUMBER_FORMAT = 'en-US';

const items = [...document.querySelectorAll('.population')];

const total = items.reduce(
  (accumulator, element) => accumulator + parseNumber(element.textContent),
  0,
);

const average = total / items.length;

document.querySelector('.average-population').textContent =
  getFormatted(average);

document.querySelector('.total-population').textContent = getFormatted(total);

function getFormatted(number, locale = NUMBER_FORMAT) {
  return number.toLocaleString(locale);
}

function parseNumber(stringNumber, separator = ',', radix = 10) {
  return parseInt(stringNumber.replaceAll(separator, ''), radix);
}
