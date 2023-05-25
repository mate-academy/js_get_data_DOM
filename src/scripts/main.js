'use strict';

const populationSpans = document.querySelectorAll('.population');
let total = 0;

populationSpans.forEach(span => {
  const population = Number(span.textContent.split(',').join(''));
  if (population) {
    total += population;
  }
});

const average = total / populationSpans.length;
const totalSpan = document.querySelector('.total-population');

totalSpan.textContent = total.toLocaleString('en-US');

const averageSpan = document.querySelector('.average-population');

averageSpan.textContent = average.toLocaleString('en-US');
