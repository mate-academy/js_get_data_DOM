'use strict';

const populationArr = [...document.querySelectorAll('.population')]
  .map(elem => +elem.textContent.split(',').join(''));

document.querySelector('.total-population').textContent
  = addCommas(populationArr.reduce((accu, elem) => accu + elem));

document.querySelector('.average-population').textContent
  = addCommas(populationArr.reduce((accu, elem, i) =>
    ((accu * i) + elem) / (i + 1)));

function addCommas(number) {
  const numArr = ('' + number).split('');
  let i = numArr.length - 3;

  while (i > 0) {
    numArr.splice(i, 0, ',');
    i -= 3;
  }

  return numArr.join('');
}
