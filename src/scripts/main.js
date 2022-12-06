'use strict';

const collection = document.querySelectorAll('.population');

let totalValue = 0;

for (let i = 0; i < collection.length; i++) {
  const populationStr = (collection[i].textContent);
  const stringWithoutCommas = populationStr.replaceAll(',', '');

  if (!isNaN(stringWithoutCommas)) {
    totalValue += Number(stringWithoutCommas);
  }
}

const avg = totalValue / collection.length;

document.querySelector('.total-population')
  .textContent = totalValue.toLocaleString('en-US');

document.querySelector('.average-population')
  .textContent = avg.toLocaleString('en-US');
