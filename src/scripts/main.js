'use strict';

const populationsArr = Array.from(document.querySelectorAll('.population'));

const totalValue = populationsArr.reduce((acc, curr) => {
  const currPopulation = +curr.textContent.split(',').join('');

  return acc + currPopulation;
}, 0);

const avarageValue = totalValue / populationsArr.length;

document
  .querySelector('.total-population')
  .textContent = totalValue
    .toLocaleString('en-US');

document
  .querySelector('.average-population')
  .textContent = avarageValue
    .toLocaleString('en-US');
