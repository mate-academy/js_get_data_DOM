'use strict';

const populations = [...document.querySelectorAll('.population')]
  .map((onePopulation) => +(onePopulation.innerText.replace(/,/g, '')));

document.querySelector('.total-population').innerText = Number(
  populations.reduce((total, amount) => total + amount)
).toLocaleString('en');

document.querySelector('.average-population').innerText = Number((
  populations.reduce((total, amount) => total + amount) / populations.length)
  .toFixed(0)
).toLocaleString('en');
