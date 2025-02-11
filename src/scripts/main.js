'use strict';

const populationList = document.querySelectorAll(
  '.container ol li span.population',
);

const totalLocation = document.querySelector(
  'div.container p.total span.total-population',
);
const averageLocation = document.querySelector(
  'div.container p.average span.average-population',
);

let total = 0;
let average = 0;

for (const population of populationList) {
  const number = +population.innerText.replace(/,/g, '');

  total += number;
  average++;
}

total += '';
average = Math.round(total / average) + '';

total = total.match(/(\d{3}|\d+)/g).join(',');
average = average.match(/(\d{3}|\d+)/g).join(',');

totalLocation.innerHTML = total;
averageLocation.innerHTML = average;
