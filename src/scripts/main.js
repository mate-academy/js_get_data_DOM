'use strict';

const list = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const separator = new Intl.NumberFormat('en-US');
let total = 0;

for (let i = 0; i < list.length; i++) {
  total += Number(list[i].innerHTML.split(',').join(''));
}

totalPopulation.innerHTML = String(separator.format(total));
averagePopulation.innerHTML = String(separator.format(total / list.length));
