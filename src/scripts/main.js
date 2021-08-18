'use strict';

const population = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const toNum = [...population].map((item) =>
  Number(item.innerText.split(',').join(''))
);
const totalPopulation = toNum.reduce((item, current) => item + current, 0);
const averagePopulation = totalPopulation / toNum.length;

total.innerText = new Intl.NumberFormat('en').format(totalPopulation);
average.innerText = new Intl.NumberFormat('en').format(averagePopulation);
