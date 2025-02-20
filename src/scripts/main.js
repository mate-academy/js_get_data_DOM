'use strict';

const populations = document.querySelectorAll('.population');
let totalValue = 0;

for (let i = 0; i < populations.length; i++) {
  const value = populations[i].textContent.replace(/,/g, '');
  const valueInNumber = +value;

  if (typeof valueInNumber === 'number') {
    totalValue += valueInNumber;
  }
}

const averageValue = totalValue / populations.length;

document.querySelector('.total-population').textContent =
  totalValue.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  averageValue.toLocaleString('en-US');
