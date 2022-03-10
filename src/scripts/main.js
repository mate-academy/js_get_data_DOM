'use strict';

const allPopulationElements = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const allPopulation = [...allPopulationElements].map(elem =>
  +elem.innerText.split(',').join('')
);
const total = [...allPopulation].reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  0
);

totalPopulation.innerText = numberWithCommas(total);
averagePopulation.innerText = numberWithCommas(total / allPopulation.length);

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
