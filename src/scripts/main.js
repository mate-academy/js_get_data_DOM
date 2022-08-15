'use strict';

const population = document.querySelectorAll('.population');
const populationArray = [...population].map(value =>
  Number(value.innerHTML.replaceAll(',', '')));

const totalValue = populationArray.reduce((prev, current) => prev + current);
const averageValue = totalValue / populationArray.length;

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

total.innerHTML = totalValue.toLocaleString('en');
average.innerHTML = averageValue.toLocaleString('en');
