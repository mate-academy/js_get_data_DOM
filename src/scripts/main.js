'use strict';

const allSpan = document.getElementsByClassName('population');

const numberSpan = [...allSpan].map((item) => {
  return Number(item.textContent.trim().replace(/,/g, ''));
});

const total = numberSpan.reduce((a, b) => {
  return a + b;
}, 0);

const average = total / numberSpan.length;

document.getElementsByClassName('total-population')[0].textContent =
  total.toLocaleString('en-US');

document.getElementsByClassName('average-population')[0].textContent =
  Math.round(average).toLocaleString('en-US');
