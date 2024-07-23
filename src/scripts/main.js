'use strict';

const countryPopulation = document.querySelectorAll('.population');
const targetElementTotal = document.querySelector('.total-population');
const targetElementAverage = document.querySelector('.average-population');

let total = [];

for (let i = 0; i < countryPopulation.length; i++) {
  total.push(countryPopulation[i].innerHTML);
}

total = total
  .map((el) => +el.split(',').join(''))
  .reduce((acc, el) => acc + el);

const average = total / countryPopulation.length;

function changeButtons() {
  targetElementTotal.innerHTML = total.toLocaleString();
  targetElementAverage.innerHTML = average.toLocaleString();
}
changeButtons();
