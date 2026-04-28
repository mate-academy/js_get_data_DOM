'use strict';

const elements = document.querySelectorAll('.population');

let total = 0;

elements.forEach((el) => {
  const num = Number(el.textContent.replace(/,/g, ''));

  total += num;
});

const average = Math.round(total / elements.length);

const averageEl = document.querySelector('.average-population');
const totalEl = document.querySelector('.total-population');

averageEl.textContent = average.toLocaleString();
totalEl.textContent = total.toLocaleString();
