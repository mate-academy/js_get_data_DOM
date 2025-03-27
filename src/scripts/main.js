'use strict';

const populationAll = document.querySelectorAll('.population');
const totalEl = document.querySelector('.total-population');
const averageEl = document.querySelector('.average-population');

let total = 0;

populationAll.forEach((item) => {
  total += Number(item.innerHTML.split(',').join(''));
});

const average = total / populationAll.length;

totalEl.innerHTML = total.toLocaleString('en');
averageEl.innerHTML = average.toLocaleString('en');
