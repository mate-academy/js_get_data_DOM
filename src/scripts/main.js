'use strict';

const population = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const data = [...population].map((item) => {
  return +item.innerHTML.split(',').join('');
});

const totalPopulation = data.reduce((x, y) => x + y);
const avaragePopulation = data.reduce((x, y) => x + y) / data.length;

total.innerHTML = totalPopulation.toLocaleString('en');
average.innerHTML = avaragePopulation.toLocaleString('en');
