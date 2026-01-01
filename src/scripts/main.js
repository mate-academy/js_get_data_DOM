'use strict';

// write your code here
const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const arrPopulation = [...population].map((el) => {
  const value = Number(el.textContent.replace(/,/g, ''));

  return Number.isNaN(value) ? 0 : value;
});

const total = arrPopulation.reduce((acc, val) => acc + val, 0);
const average = Math.floor(total / arrPopulation.length);

totalPopulation.replaceChildren(total.toLocaleString('en-US'));
averagePopulation.replaceChildren(average.toLocaleString('en-US'));
