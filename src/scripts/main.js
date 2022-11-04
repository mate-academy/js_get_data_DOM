'use strict';

const items = document.querySelectorAll('.population');
const values = [...items].map(item => {
  const text = item.innerText;
  let result = '';

  for (const char of text) {
    if (isFinite(char)) {
      result += char;
    }
  }

  return +result;
});
const totalValue = values.reduce((sum, x) => sum + x, 0);
const averageValue = totalValue / values.length;

const total = document.querySelector('.total-population');

total.innerText = totalValue.toLocaleString('en-US');

const average = document.querySelector('.average-population');

average.innerText = averageValue.toLocaleString('en-US');
