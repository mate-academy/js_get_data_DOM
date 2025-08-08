'use strict';

const population = document.getElementsByClassName('population');
let total = 0;

for (const country of population) {
  const value = Number(country.innerText.replace(/,/g, ''));

  total += value;
}

const average = Math.floor(total / population.length).toLocaleString();

document.querySelector('.total-population').innerText = total.toLocaleString();
document.querySelector('.average-population').innerText = average;
