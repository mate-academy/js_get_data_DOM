'use strict';

const populations = document.querySelectorAll('.population');

const total = [...populations].reduce((acc, element) =>
  +element.textContent.replaceAll(',', '') + acc, 0);
const average = total / populations.length;

document.querySelector('.total-population')
  .textContent = total.toLocaleString('en-us');

document.querySelector('.average-population')
  .textContent = average.toLocaleString('en-us');
