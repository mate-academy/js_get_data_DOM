'use strict';

const spans = document.querySelectorAll('.population');

const population = [...spans]
  .map(item => Number(item.innerText.split(',').join('')));

const total = population.reduce((sum, current) => sum + current);

const average = population
  .reduce((sum, current) => sum + current) / population.length;

function separator(number) {
  let toSeparate = number;
  const result = [];

  while (toSeparate > 1000) {
    result.push(toSeparate % 1000);
    toSeparate = Math.trunc(toSeparate / 1000);
  }

  result.push(toSeparate);

  return result.reverse().join(',');
}

document.querySelector('.total-population').innerText = separator(total);

document.querySelector('.average-population').innerText = separator(average);
