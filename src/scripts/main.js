'use strict';

const dataSpans = document.querySelectorAll('.population');
const totalElement = document.querySelector('.total');
const averageElement = document.querySelector('.average');

function removeCommas(str) {
  return str.replace(/,/g, '');
}

function formatNumberWithCommas(number) {
  const numStr = number.toString();

  const formattedStr = numStr
    .split('')
    .reverse()
    .map((digit, index) => {
      return index % 3 === 0 && index !== 0 ? digit + ',' : digit;
    })
    .reverse()
    .join('');

  return formattedStr;
}

const populations = Array.from(dataSpans).map((el) => {
  return removeCommas(el.textContent);
});

const totalPopulatio = populations.reduce((acc, cur) => acc + +cur, 0);
const averagePopulatio = totalPopulatio / dataSpans.length;

totalElement.textContent = `Total: ${formatNumberWithCommas(totalPopulatio)}`;
averageElement.textContent = `Average: ${formatNumberWithCommas(averagePopulatio)}`;
