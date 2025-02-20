'use strict';

const popList = [...document.querySelectorAll('.population')].map((el) => {
  return parseInt(el.textContent.replace(/,/g, ''));
});

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const totalPopulation = popList.reduce((i, acum) => i + acum, 0);

average.textContent = Math.floor(
  totalPopulation / popList.length,
).toLocaleString('en-US');

total.textContent = totalPopulation.toLocaleString('en-US');
