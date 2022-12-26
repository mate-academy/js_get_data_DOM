'use strict';

const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
let total = 0;

population.forEach(item => {
  const numberPopulation = +(item.innerText.split(',').join(''));

  total += numberPopulation;
});

const averageNumberPop = total / population.length;

function thousandSeparator(num) {
  return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

totalPopulation.innerText = thousandSeparator(total);
averagePopulation.innerText = thousandSeparator(averageNumberPop);
