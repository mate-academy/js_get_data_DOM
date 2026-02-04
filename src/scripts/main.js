'use strict';

const population = document.querySelectorAll('.population');

let total = 0;

for (const item of population) {
  const number = Number(item.textContent);

  total = total + number;
}

const average = total / population.length;

const totalNumber = document.querySelector('.total-population');

totalNumber.textContent = total.toLocaleString();

const averageNumber = document.querySelector('.average-population');

averageNumber.textContent = average.toLocaleString();
