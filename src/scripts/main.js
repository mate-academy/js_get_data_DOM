'use strict';

const span = document.querySelectorAll('.population');

const result = [];

span.forEach((item) => {
  result.push(Number(item.textContent.replaceAll(',', '')));
});

let total = 0;

result.forEach((num) => {
  total += num;
});

const average = total / result.length;

const averagePopulation = document.querySelector('.average-population');

averagePopulation.textContent = Math.round(average).toLocaleString();

const totalPopulation = document.querySelector('.total-population');

totalPopulation.textContent = total.toLocaleString();
