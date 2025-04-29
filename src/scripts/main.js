'use strict';

const spans = [...document.querySelectorAll('span.population')];

const population = spans.map((span) => span.textContent.replaceAll(',', ''));

const total = population.reduce((sum, el) => sum + (+el || 0), 0);
const average = Math.round(total / population.length);

function formating(number) {
  let a = `${number}`;

  for (let i = a.length - 3; i > 0; i -= 3) {
    a = a.slice(0, i) + ',' + a.slice(i);
  }

  return a;
}

const totalFormatted = formating(total);
const averageFormatted = formating(average);

document.querySelector('.total-population').textContent = totalFormatted;
document.querySelector('.average-population').textContent = averageFormatted;
