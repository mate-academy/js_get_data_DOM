'use strict';

const elements = [...document.querySelectorAll('.population')];

let total = 0;

elements.forEach((el) => {
  const count = Number(el.textContent.replaceAll(',', ''));

  total += count;
});

const average = Math.floor(total / elements.length);

const upAverage = average.toLocaleString('en-US');
const upTotal = total.toLocaleString('en-US');

document.querySelector('.total-population').textContent = upTotal;
document.querySelector('.average-population').textContent = upAverage;
