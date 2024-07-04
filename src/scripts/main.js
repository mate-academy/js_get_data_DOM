'use strict';

const spanEl = document.querySelectorAll('.population');
const totalEl = document.querySelector('.total-population');
const averageEl = document.querySelector('.average-population');

const num = [];
let total = 0;
let average = 0;

spanEl.forEach((span) => {
  const textContent = span.innerHTML;

  const numericContent = textContent.replace(/[^\d.-]/g, '');

  const number = Number(numericContent);

  num.push(number);
});

for (let i = 0; i < num.length; i++) {
  total += num[i];
}

average = total / num.length;

totalEl.innerHTML = total.toLocaleString('en-US');
averageEl.innerHTML = average.toLocaleString('en-US');
