'use strict';

function calculateSum() {
  return arr.reduce((accumulator, current) => {
    return accumulator + current;
  }, 0);
}

const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total');
const averagePopulation = document.querySelector('.average');

const arr = [...population].map((x) => {
  return +x.innerText.replace(/,/gi, '');
});

averagePopulation.innerText = (calculateSum() / arr.length)
  .toLocaleString('en');

totalPopulation.innerText = calculateSum().toLocaleString('en');
