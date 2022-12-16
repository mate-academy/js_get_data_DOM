'use strict';

const list = document.querySelectorAll('.list__item');

const population = [];

for (const item of list) {
  population
    .push(+item.children[item.children.length - 1]
      .innerHTML.replaceAll(',', ''));
}

const total = document.querySelector('.total-population');
const totalSum = population.reduce((acc, el) => acc + el, 0);

total.innerHTML = (totalSum).toLocaleString('en');

const average = document.querySelector('.average-population');

average
  .innerHTML = (population.reduce((acc, el) => acc + el, 0) / list.length)
    .toLocaleString('en');
