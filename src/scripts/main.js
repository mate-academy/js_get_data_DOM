'use strict';

const arr = [...document.querySelectorAll('.population')]
  .map(elem => +elem.textContent.split(',').join(''));

document.querySelector('.total-population').textContent
= addCommas(arr.reduce((a, b) => a + b));

document.querySelector('.average-population').textContent
= addCommas(arr.reduce((a, b, i) => (a * i + b) / (i + 1)));

function addCommas(number) {
  const numArr = ('' + number).split('');
  let i = numArr.length - 3;

  while (i > 0) {
    numArr.splice(i, 0, ',');
    i -= 3;
  }

  return numArr.join('');
}
