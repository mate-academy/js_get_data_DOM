'use strict';

const elements = [...document.querySelectorAll('.population')];
const totalValue = elements.reduce((sum, el) => {
  const value = +el.innerHTML.split(',').join('');

  return sum + value;
}, 0);

const avgValue = totalValue / elements.length;

document.querySelector('.total-population').innerHTML =
  totalValue.toLocaleString('en-US');

document.querySelector('.average-population').innerHTML =
  avgValue.toLocaleString('en-US');
