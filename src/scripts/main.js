'use strict';

const spans = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

let totalPopulation = 0;

spans.forEach(span => {
  const population = parseInt(span.textContent.replace(/,/g, ''));

  if (!isNaN(population)) {
    totalPopulation += population;
  }
});

const averagePopulation = totalPopulation / spans.length;

const totalWithSeparate = totalPopulation.toLocaleString('en-US');
const averageWithSeparate = averagePopulation.toLocaleString('en-US');

total.innerText = totalWithSeparate;
average.innerText = averageWithSeparate;
