'use strict';

const items = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const avarage = document.querySelector('.average-population');
const array = [];

for (let i = 0; i < items.length; i++) {
  const item = Number(items[i].textContent.replaceAll(',', ''));

  array.push(item);
}

const totalPopulation = array.reduce((acc, cur) => acc + cur);
const avaragePopulation = totalPopulation / array.length;

total.textContent = totalPopulation.toLocaleString('en-US');
avarage.textContent = avaragePopulation.toLocaleString('en-US');
