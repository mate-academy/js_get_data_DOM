'use strict';

const data = document.querySelectorAll('.population');
const average = document.querySelector('.average-population');
const totalPopulation = document.querySelector('.total-population');
let total = 0;

for (const countryPopulation of data) {
  const number = countryPopulation.innerText.split(',').join('');

  total += +number;
}

totalPopulation.innerText = total.toLocaleString('en');
average.innerText = (total / data.length).toLocaleString('en');
