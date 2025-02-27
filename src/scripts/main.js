'use strict';

const population = document.querySelectorAll('.population');
const populationValues = [...population].map((el) => el.innerText);

for (let i = 0; i < populationValues.length; i++) {
  populationValues[i] = Number(populationValues[i].replace(/,/g, ''));
}

const total = populationValues.reduce(
  (sumPop, currentPop) => sumPop + currentPop,
);

const avg = total / populationValues.length;

const totalPopulation = document.querySelector('.total-population');
const avgPopaltion = document.querySelector('.average-population');

totalPopulation.replaceWith(Intl.NumberFormat('en-US').format(total));
avgPopaltion.replaceWith(Intl.NumberFormat('en-US').format(Math.round(avg)));
