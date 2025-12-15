'use strict';

let sum = 0;

const elements = document.querySelectorAll('.population');

for (const element of elements) {
  const text = element.textContent;
  const number = Number(text.replace(/,/g, ''));

  sum += number;
}

const average = sum / elements.length;

document.querySelector('.total-population').textContent = sum.toLocaleString(
  'en-US',
  {},
);

document.querySelector('.average-population').textContent =
  average.toLocaleString('en-US', {});
