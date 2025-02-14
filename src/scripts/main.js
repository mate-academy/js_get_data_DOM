'use strict';

const totalEl = document.querySelector('.total-population');
const averageEl = document.querySelector('.average-population');
const populations = document.querySelectorAll('.population');

const total = Array.from(populations).reduce((acc, el) => {
  return acc + Number(el.textContent.replaceAll(',', ''));
}, 0);

const average = Math.round(total / populations.length);

totalEl.textContent = total.toLocaleString();
averageEl.textContent = average.toLocaleString();
