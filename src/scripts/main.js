'use strict';

const populations = document.querySelectorAll('.population');
const populationsArr = [...populations].map((elem) => {
  return parseFloat(elem.textContent.split(',').join(''));
});

const totalValue = populationsArr.reduce((acc, elem) => acc + elem, 0);
const averageValue = totalValue / populations.length;

document.querySelector('.total-population').textContent =
  totalValue.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  averageValue.toLocaleString('en-US');
