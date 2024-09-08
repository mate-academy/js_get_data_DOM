'use strict';

const arr = Array.from(document.querySelectorAll('span.population')).map(
  (el) => {
    return parseInt(el.innerText.split(',').join(''));
  },
);

const total = arr.reduce((sum, el) => sum + el, 0);

document.querySelector('span.total-population').innerText =
  total.toLocaleString('en-US');

document.querySelector('span.average-population').innerText = (
  total / arr.length
).toLocaleString('en-US');
