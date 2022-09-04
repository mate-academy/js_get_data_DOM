'use strict';

const container = document.querySelectorAll('span.population');
const numbs = [...container].map(item => +(item.innerText.split(',').join('')));

const sum = numbs.reduce((x, y) => {
  return x + y;
});

const avg = Math.round(sum / numbs.length);
const sumEl = document.querySelector('span.total-population');
const avgEl = document.querySelector('span.average-population');

sumEl.textContent = `${sum}`;
avgEl.textContent = `${avg}`;
