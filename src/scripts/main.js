'use strict';

const allPopulationSpan = [...document.querySelectorAll('span.population')];

let total = 0;
let count = 0;
let average = 0;

allPopulationSpan.forEach(span => {
  total += Number.parseFloat(span.innerHTML.replace(/,/g, ''));
  count++;
});

average = total / count;

document.querySelector('span.total-population')
  .textContent = total.toLocaleString();

document.querySelector('span.average-population')
  .textContent = average.toLocaleString();
