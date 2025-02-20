'use strict';

const matches = document.querySelectorAll('span.population');
let total = 0;

for (const element of matches) {
  const population = +element.textContent.replaceAll(',', '');

  total += isNaN(population) ? 0 : +population;
}

document.querySelector('span.total-population').innerHTML =
  Intl.NumberFormat('en-US').format(total);

document.querySelector('span.average-population').innerHTML = Intl.NumberFormat(
  'en-US',
).format(total / matches.length);
