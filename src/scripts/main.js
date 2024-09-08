'use strict';

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');
const list = document.querySelector('.list');
const items = list.querySelectorAll('.list__item');

function calculateTotal() {
  let totalPopulation = 0;

  items.forEach((item) => {
    const population = item.querySelector('.population').textContent;

    totalPopulation += +population.split(',').join('');
  });
  total.textContent = totalPopulation;
}

function calculateAverage() {
  let averagePopulation = 0;
  let totalPopulation = 0;

  items.forEach((item) => {
    const population = item.querySelector('.population').textContent;

    totalPopulation += +population.split(',').join('');
  });
  averagePopulation = Math.floor(totalPopulation / items.length);
  average.textContent = averagePopulation;
}

calculateTotal();
calculateAverage();
